package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
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
    private Time horario_llegada;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fecha_inicio;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date fecha_fin;

    @ManyToOne
    @JsonIncludeProperties("id")
    private Producto producto;

    @ManyToOne
    @JsonIncludeProperties("id")
    private Usuario usuario;

}
