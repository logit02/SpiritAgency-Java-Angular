package spirit.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public static final long serialVersionUID = 1L;
    private Long id;
    public ResourceNotFoundException(Long id){
        super(String.format(" not found with %s", id));
        this.id = id;
    }
    public Long getId(){
        return id;
    }

}
