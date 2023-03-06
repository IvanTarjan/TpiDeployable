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
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="puntuacion")
public class Puntuacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Integer puntiacion;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade =
                    {CascadeType.MERGE},
            mappedBy = "puntuacion")
    @JsonIgnoreProperties("puntuacion")
    private Set<Producto> producto = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade =
                    {CascadeType.MERGE},
            mappedBy = "puntuacion")
    @JsonIgnoreProperties("puntuacion")
    private Set<Usuario> usuario = new HashSet<>();


}
