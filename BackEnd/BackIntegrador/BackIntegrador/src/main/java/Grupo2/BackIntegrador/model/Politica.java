package Grupo2.BackIntegrador.model;

import javax.persistence.*;

@Entity
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
    @JoinColumn(name = "producto_id",referencedColumnName = "id")
    private Producto producto;

    public Politica() {
    }

    public Politica(Long id, String titulo, String descripcion, Producto producto) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.producto = producto;
    }

    public Politica(String titulo, String descripcion, Producto producto) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.producto = producto;
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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
