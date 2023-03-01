package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="UBICACION")
public class Ubicacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String ciudad;
    @Column
    private String provincia;
    @Column
    private String pais;

    @OneToMany(mappedBy = "ubicacion",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Producto> productos= new HashSet<>();
    public Ubicacion() {
    }

    public Ubicacion(Long id, String ciudad, String provincia, String pais) {
        this.id = id;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
    }

    public Ubicacion(String ciudad, String provincia, String pais) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }
}
