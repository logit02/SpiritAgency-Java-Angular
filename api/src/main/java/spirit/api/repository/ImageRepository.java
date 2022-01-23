package spirit.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spirit.api.model.Images;
import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Images, Long> {
    List<Images> findByTourId(Long tour_id);
}
