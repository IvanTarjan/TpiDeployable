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
    private LocalDate fecha_inicio;
    @Column
    private LocalDate fecha_fin;

    @ManyToOne
    @JsonIgnoreProperties("reserva")
    private Producto producto;

    @ManyToOne
    @JsonIgnoreProperties("reserva")
    private Usuario usuario;

}
