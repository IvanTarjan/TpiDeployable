package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="reserva")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Usuario usuario;
    @Column
    private LocalDate fecha_inicio;
    @Column
    private LocalDate fecha_fin;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade =
                    {CascadeType.MERGE},
            mappedBy = "reserva")
    @JsonIgnoreProperties("reserva")
    private Set<Producto> producto = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade =
                    {CascadeType.MERGE},
            mappedBy = "reserva")
    @JsonIgnoreProperties("reserva")
    private Set<Usuario> usuario = new HashSet<>();


}
