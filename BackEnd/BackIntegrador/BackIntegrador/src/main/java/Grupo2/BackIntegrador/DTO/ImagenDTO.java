package Grupo2.BackIntegrador.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImagenDTO {

    private Long id;
    private String titulo;
    private String url_img;

    @Override
    public String toString() {
        return "ImagenDTO{"+
                "id="+ id +
                ", titulo=" + titulo +
                ", url_img=" + url_img +
                "}";
    }
}
