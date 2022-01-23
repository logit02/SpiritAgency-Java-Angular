package spirit.api.controller;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spirit.api.exception.ResourceNotFoundException;
import spirit.api.model.Images;
import spirit.api.model.Tour;
import spirit.api.repository.ImageRepository;
import spirit.api.service.ImageService;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tours/images")
public class ImagesController {
    private ImageService imageService;
    private final ImageRepository imageRepository;

    public ImagesController(ImageService imageService, ImageRepository imageRepository) {
        super();
        this.imageService = imageService;
        this.imageRepository = imageRepository;
    }

    @PostMapping()
    public ResponseEntity<Images> saveImage(@RequestBody Images images){
        return new ResponseEntity<Images>(imageService.saveImage(images), HttpStatus.CREATED);
    }

    @GetMapping()
    List<Images> all(){
        return imageRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Images>> getImageByTourId(@PathVariable Long id){
        return new ResponseEntity<List<Images>>(imageRepository.findByTourId(id), HttpStatus.OK);
    }
}
