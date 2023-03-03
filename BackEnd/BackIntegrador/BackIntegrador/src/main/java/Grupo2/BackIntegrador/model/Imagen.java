package Grupo2.BackIntegrador.model;

import javax.persistence.*;

@Entity
@Table(name="imagen")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String titulo;
    @Column
    private String url_img;

    @ManyToOne
    @JoinColumn(name = "producto_id",referencedColumnName = "id")
    private Producto producto;

    public Imagen() {
    }

    public Imagen(Long id, String titulo, String url_img) {
        this.id = id;
        this.titulo = titulo;
        this.url_img = url_img;
    }

    public Imagen(String titulo, String url_img) {
        this.titulo = titulo;
        this.url_img = url_img;
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

    public String getUrl_img() {
        return url_img;
    }

    public void setUrl_img(String url_img) {
        this.url_img = url_img;
    }
}
