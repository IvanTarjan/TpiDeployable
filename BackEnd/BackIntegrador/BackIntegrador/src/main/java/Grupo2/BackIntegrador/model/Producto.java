package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name="producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String titulo;

    @Column
    private String descripcion;

    @Column
    private Long precio;

    @Column
    private Float latitud;

    @Column
    private Float longitud;

    // One to many
    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("producto")
    private Set<Imagen> imagen= new HashSet<>();

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("producto")
    private Set<Politica> politica= new HashSet<>();

    //Many to one
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "categoria_id")
    @JsonIgnoreProperties("productos")
    private Categoria categoria;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "ubicacion_id")
    @JsonIgnoreProperties("productos")
    private Ubicacion ubicacion;

    //Many to Many
    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("producto")
    @JoinTable(name = "producto_caracteristica",
            joinColumns = { @JoinColumn(name = "producto_id") },
            inverseJoinColumns = { @JoinColumn(name = "caracteristica_id") })
    private Set<Caracteristica> caracteristica = new HashSet<>();

    public void addCaracteristica (Caracteristica caracteristica){
        this.caracteristica.add(caracteristica);
        caracteristica.getProducto().add(this);
    }

    public void removeCaracteristica (Caracteristica caracteristica){
        this.caracteristica.remove(caracteristica);
        caracteristica.getProducto().remove(this);
    }


}
