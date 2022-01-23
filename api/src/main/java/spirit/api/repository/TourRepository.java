package spirit.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spirit.api.model.Tour;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {

}
