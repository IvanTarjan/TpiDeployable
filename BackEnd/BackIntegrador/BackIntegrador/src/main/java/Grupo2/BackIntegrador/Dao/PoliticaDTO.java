package Grupo2.BackIntegrador.Dao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class PoliticaDTO {

    private Long id;
    private String titulo;
    private String descripcion;

    @Override
    public String toString() {
        return "PoliticaDTO{"+
                "id="+ id +
                ", titulo=" + titulo +
                ", descipcion=" + descripcion +
                "}";
    }
}
