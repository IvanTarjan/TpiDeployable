package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;

import Grupo2.BackIntegrador.model.Producto;

import Grupo2.BackIntegrador.repository.ProductoRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    private ProductoRepository productoRepository;
    private static final Logger LOGGER=Logger.getLogger(ProductoService.class);
    @Autowired
    public ProductoService(ProductoRepository productoRepository) {

        this.productoRepository = productoRepository;
    }

    public List<Producto> listarProducto() {
        LOGGER.info("Se inició el listado de todas las productos");
        return productoRepository.findAll();
    }

    public Producto guardarProducto(Producto producto){
        LOGGER.info("Se inició una operación de guardado de la producto con titulo: "+
                producto.getTitulo());
        return productoRepository.save(producto);
    }

    public void actualizarProducto(Producto producto){
        LOGGER.info("Se inició una operación de actualización de la producto con id="+
                producto.getId());
        productoRepository.save(producto);
    }

    public void eliminarProducto(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoAEliminar=buscarProductoXId(id);
        if (productoAEliminar.isPresent()){
            productoRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la producto con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La producto a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Producto> buscarProductoXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la producto con id="+id);
        return productoRepository.findById(id);
    }
}
