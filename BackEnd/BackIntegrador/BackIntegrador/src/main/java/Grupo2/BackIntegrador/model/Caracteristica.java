package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="CARACTERISTICA")
public class Caracteristica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String icono;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "caracteristica")
    @JsonIgnore
    private Set<Producto> producto = new HashSet<>();

    public Caracteristica() {
    }

    public Caracteristica(Long id, String titulo, String icono) {
        this.id = id;
        this.titulo = titulo;
        this.icono = icono;
    }

    public Caracteristica(String titulo, String icono) {
        this.titulo = titulo;
        this.icono = icono;
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

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }
}
