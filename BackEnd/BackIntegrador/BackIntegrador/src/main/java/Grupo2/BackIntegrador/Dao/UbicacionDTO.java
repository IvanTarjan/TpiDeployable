package Grupo2.BackIntegrador.Dao;

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
public class UbicacionDTO {

    private Long id;
    private String ciudad;
    private String provincia;
    private String pais;

    @Override
    public String toString() {
        return "UbicacionDTO{"+
                "id="+ id +
                ", ciudad=" + ciudad +
                ", provincia=" + provincia +
                ", pais=" + pais +
                "}";
    }
}
