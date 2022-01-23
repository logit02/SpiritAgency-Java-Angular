package spirit.api.ServiceImpl;

import org.springframework.stereotype.Service;
import spirit.api.model.Images;
import spirit.api.repository.ImageRepository;
import spirit.api.service.ImageService;

@Service
public class ImageServiceImpl implements ImageService {
    private ImageRepository imageRepository;

    public ImageServiceImpl(ImageRepository imageRepository) {
        super();
        this.imageRepository = imageRepository;
    }

    @Override
    public Images saveImage(Images images) {
        return imageRepository.save(images);
    }
}
