package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;


import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.Imagen;
import Grupo2.BackIntegrador.model.Politica;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.repository.ProductoRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private ProductoRepository productoRepository;
    private ImagenService imagenService;
    private PoliticaService politicaService;
    private static final Logger LOGGER=Logger.getLogger(ProductoService.class);
    @Autowired
    public ProductoService(ProductoRepository productoRepository, ImagenService imagenService, PoliticaService politicaService) {
        this.productoRepository = productoRepository;
        this.imagenService = imagenService;
        this.politicaService = politicaService;
    }

    public List<Producto> listarProducto() {
        LOGGER.info("Se inició el listado de todas las productos");
        return productoRepository.findAll();
    }

    public Producto guardarProducto(Producto producto){
        for (Imagen i : producto.getImagen()) {
            i.setProducto(producto);
        }
        for (Politica p : producto.getPolitica()) {
            p.setProducto(producto);
        }
        System.out.println(producto.getImagen());
        System.out.println(producto.getPolitica());
        Producto productoTemp = productoRepository.save(producto);
        LOGGER.info("Se inició una operación de guardado de la producto con titulo: "+
                producto.getTitulo());
        return productoTemp;
    }

    public void actualizarProducto(Producto producto) throws ResourceNotFoundException {
        buscarProductoXId(producto.getId());
        Producto productoTemp = productoRepository.save(producto);
        imagenService.guardarImagenes(producto.getImagen(), producto);
        politicaService.guardarPoliticas(producto.getPolitica(), producto);
        LOGGER.info("Se inició una operación de actualización de la producto con id="+
                producto.getId());
    }

    public void eliminarProducto(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoAEliminar = buscarProductoXId(id);
        if (productoAEliminar.isPresent()){
            productoAEliminar.get().getCategoria().removeProducto(productoAEliminar.get());
            productoAEliminar.get().getUbicacion().removeProducto(productoAEliminar.get());
            productoRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación del producto con id="+id);
        } else {
            throw new ResourceNotFoundException("No se pudo eliminar el producto con id = "+id+" no se pudo encontrar en la base de datos");
        }
    }

    public Optional<Producto> buscarProductoXId(Long id) throws ResourceNotFoundException {
            LOGGER.info("Se inició una operación de búsqueda de la producto con id="+id);
            return productoRepository.findById(id);
    }
    public List<Producto> buscarProductoPorCategoria(Categoria categoria) {
        LOGGER.info("Se inició euna busqueda de todos los productos con categoria id=" + categoria.getId());
        return productoRepository.findByCategoria(categoria);
    }

//    private Integer calcularPromedio(Producto producto){
//        Integer promedio = 0;
//        if(producto.)
//    }
}
