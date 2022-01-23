package spirit.api.ServiceImpl;

import org.springframework.stereotype.Service;
import spirit.api.model.Tour;
import spirit.api.repository.TourRepository;
import spirit.api.service.TourService;

@Service
public class TourServiceImpl implements TourService {

    private TourRepository tourRepository;

    public TourServiceImpl(TourRepository tourRepository){
        super();
        this.tourRepository = tourRepository;
    }
    @Override
    public Tour saveTour(Tour tour) {
        return tourRepository.save(tour);
    }
}
