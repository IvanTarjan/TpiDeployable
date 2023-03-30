package Grupo2.BackIntegrador.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name="categoria")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String descripcion;
    @Column
    private String url_imagen;

    @OneToMany(mappedBy = "categoria",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIncludeProperties({"id", "imagen"})
    private Set<Producto> productos= new HashSet<>();

    public void removeProducto (Producto producto){
        this.productos.remove(producto);
        producto.setCategoria(null);
    }
}
