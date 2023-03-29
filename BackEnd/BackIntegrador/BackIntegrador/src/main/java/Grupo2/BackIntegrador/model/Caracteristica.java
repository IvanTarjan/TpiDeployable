package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name="caracteristica")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String icono;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade =
                    {CascadeType.MERGE},
            mappedBy = "caracteristica")
    @JsonIgnoreProperties("caracteristica")
    private Set<Producto> producto = new HashSet<>();

    public void addProducto (Producto producto){
        this.producto.add(producto);
        producto.getCaracteristica().add(this);
    }

    public void removeProducto (Producto producto){
        this.producto.remove(producto);
        producto.getCaracteristica().remove(this);
    }

}
