package Grupo2.BackIntegrador.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriaDTO {

    private Long id;
    private String titulo;
    private String descripcion;
    private String url_imagen;

    @Override
    public String toString() {
        return "CategoriaDTO{"+
                "id="+ id +
                ", titulo=" + titulo +
                ", descripcion=" + descripcion +
                ", url_imagen=" + url_imagen +
                "}";
    }
}
