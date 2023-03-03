package Grupo2.BackIntegrador.DTO;

import Grupo2.BackIntegrador.model.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductoDTO {

    private Long id;
    private String titulo, descripcion;
    private Categoria categoria;
    private ubicacion ubicacion;
    private Set<Imagen> imagen;
    private Set<Politica> politica;
    private Set<Caracteristica> caracteristica;

    @Override
    public String toString() {
        return "ProductoDTO{"+
                "id="+ id +
                ", titulo=" + titulo +
                ", descipcion=" + descripcion +
                ", categoria=" + categoria +
                ", ciudad=" + ubicacion +
                ", imagenes=" + imagen +
                ", politicas=" + politica +
                ", caracteristicas=" + caracteristica +
                "}";

    }
}
