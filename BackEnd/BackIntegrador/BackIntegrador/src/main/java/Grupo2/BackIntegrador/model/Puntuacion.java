package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


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
    private Integer puntuacion;

    @ManyToOne
    @JsonIncludeProperties("id")
    private Producto producto;

    @ManyToOne
    @JsonIncludeProperties("id")
    private Usuario usuario;


}
