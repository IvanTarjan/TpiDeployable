package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Categoria;
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
    private static final Logger LOGGER = Logger.getLogger(CategoriaService.class);

    @Autowired
    public ProductoService(ProductoRepository productoRepository) {

        this.productoRepository = productoRepository;
    }

    public List<Producto> listarProducto() {
        LOGGER.info("Se inició el listado de todas los productos");
        return productoRepository.findAll();
    }

    public Producto guardarProducto(Producto producto){
        LOGGER.info("Se inició una operación de guardado de un producto con id=: "+
                producto.getTitulo());
        return productoRepository.save(producto);
    }

    public Optional<Producto> buscarProductoXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda del producto con id="+id);
        return productoRepository.findById(id);
    }

    public void eliminarProducto(Long id) throws ResourceNotFoundException {
        Optional<Producto> productoaAEliminar=buscarProductoXId(id);
        if (productoaAEliminar.isPresent()){
            productoRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de un Producto con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("El producto a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }


}
