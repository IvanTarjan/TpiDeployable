package Grupo2.BackIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.*;

import jakarta.persistence.*;

import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @ToString
@Table(name="politica")
@Builder
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column(length = 4000)
    private String descripcion;

    @ManyToOne
    @JsonIncludeProperties("id")
    private Producto producto;

    public Politica(Politica politica){
        this.id = politica.id;;
        this.titulo = politica.titulo;
        this.descripcion = politica.descripcion;;
        this.producto = politica.producto;
    }

    public static Set<Politica> politicaSetCloner(Set<Politica> politicaSet){
        return politicaSet.stream().map(politica -> new Politica(politica)).collect(Collectors.toSet());
    }

}
