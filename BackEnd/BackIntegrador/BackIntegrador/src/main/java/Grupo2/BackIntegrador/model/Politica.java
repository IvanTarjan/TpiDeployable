package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Table(name="politica")
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String descripcion;

    @ManyToOne
    @JsonIgnoreProperties("politica")
    private Producto producto;

}
