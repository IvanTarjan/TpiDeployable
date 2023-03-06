package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;


import Grupo2.BackIntegrador.model.Categoria;
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
        Producto productoTemp = productoRepository.save(producto);
        imagenService.guardarImagenes(producto.getImagen(), producto);
        politicaService.guardarPoliticas(producto.getPolitica(), producto);
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
        buscarProductoXId(id);
        productoRepository.deleteById(id);
        LOGGER.warn("Se realizo una operación de eliminación del producto con" + "id="+id);
    }

    public Optional<Producto> buscarProductoXId(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoABuscar = productoRepository.findById(id);
        if (productoABuscar.isPresent()){
            LOGGER.info("Se inició una operación de búsqueda de la producto con id="+id);
            return productoABuscar;
        } else {
            throw new ResourceNotFoundException("No se encontro el producto con id = "+id);
        }


    }

    public List<Producto> buscarProductoPorCategoria(Categoria categoria) {
        LOGGER.info("Se inició euna busqueda de todos los productos con categoria id=" + categoria.getId());
        return productoRepository.findByCategoria(categoria);
    }
}
