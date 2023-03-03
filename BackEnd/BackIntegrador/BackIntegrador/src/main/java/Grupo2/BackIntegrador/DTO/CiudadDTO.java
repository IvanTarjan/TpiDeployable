package Grupo2.BackIntegrador.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CiudadDTO {

    private Long id;
    private String nombre;
    private String pais;

    @Override
    public String toString() {
        return "UbicacionDTO{"+
                "id="+ id +
                ", nombre=" + nombre +
                ", pais=" + pais +
                "}";
    }
}
