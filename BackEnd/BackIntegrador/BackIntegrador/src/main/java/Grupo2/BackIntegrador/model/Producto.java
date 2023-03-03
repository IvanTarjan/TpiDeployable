package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
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
    private String precio;

    // One to many
    @OneToMany(mappedBy = "producto",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Imagen> imagen= new HashSet<>();

    @OneToMany(mappedBy = "producto",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Politica> politica= new HashSet<>();

    //Many to one
    @ManyToOne
    @JoinColumn(name = "categoria_id",referencedColumnName = "id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "ubicacion_id",referencedColumnName = "id")
    private Ubicacion ubicacion;

    //Many to Many
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "producto_caracteristica",
            joinColumns = { @JoinColumn(name = "producto_id") },
            inverseJoinColumns = { @JoinColumn(name = "caracteristica_id") })
    private Set<Caracteristica> caracteristica = new HashSet<>();

    public Producto() {
    }

    public Producto(Long id, String titulo, String descripcion, String precio) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    public Producto(String titulo, String descripcion, String precio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }
}
