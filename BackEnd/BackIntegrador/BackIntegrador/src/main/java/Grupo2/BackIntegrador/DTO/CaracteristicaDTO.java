package Grupo2.BackIntegrador.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CaracteristicaDTO {

    private Long id;
    private String titulo;
    private String icono;

    @Override
    public String toString() {
        return "CaracteristicaDTO{"+
                "id="+ id +
                ", titulo=" + titulo +
                ", icono=" + icono +
                "}";
    }
}
