package spirit.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spirit.api.exception.ResourceNotFoundException;
import spirit.api.model.Tour;
import spirit.api.repository.TourRepository;
import spirit.api.service.TourService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tours")
public class TourController {
    private TourService tourService;
    private final TourRepository tourRepository;

    public TourController(TourService tourService, TourRepository tourRepository){
        super();
        this.tourService = tourService;
        this.tourRepository = tourRepository;
    }

    @PostMapping()
    public ResponseEntity<Tour> saveTour(@RequestBody Tour tour){
        return new ResponseEntity<Tour>(tourService.saveTour(tour), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    Tour one(@PathVariable Long id){
        return tourRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id));
    }
    @GetMapping()
    List<Tour> all() {
        return tourRepository.findAll();
    }
}
