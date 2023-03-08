package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Producto;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.access.method.P;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class ProductoServiceTest {

    @Autowired
    private Grupo2.BackIntegrador.service.ProductoService ProductoService;

    @Test
    @Order(1)
    void guardarProducto() throws BadRequestException {
        Producto ProductoUno = new Producto(1L, "titulo", "descripcion", 150L, 60F, 95F);
        Producto guardado = ProductoService.guardarProducto(ProductoUno);
        assertEquals(1L, guardado.getId());
        assertEquals(ProductoUno.getTitulo(), guardado.getTitulo());
        assertEquals(ProductoUno.getDescripcion(), guardado.getDescripcion());
        assertEquals(ProductoUno.getPrecio(), guardado.getPrecio());
        assertEquals(ProductoUno.getLatitud(), guardado.getLatitud());
        assertEquals(ProductoUno.getLongitud(), guardado.getLongitud());
    }

    @Test
    @Order(2)
    void actualizarProducto() throws ResourceNotFoundException {
        Long id = 1L;
        Producto actualizar = new Producto(id, "titulo actualizado", "Descripcion actualizada", 200L, 30F, 48F);
        ProductoService.actualizarProducto(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("titulo actualizado", actualizar.getTitulo());
        assertEquals("Descripcion actualizada", actualizar.getDescripcion());
        assertEquals(200L, actualizar.getPrecio());
        assertEquals(30F, actualizar.getLatitud());
        assertEquals(48F, actualizar.getLongitud());
    }

    @Test
    @Order(3)
    void buscarProductoXId() throws BadRequestException, ResourceNotFoundException {
        Long id = 1L;
        Optional<Producto> resultado = ProductoService.buscarProductoXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarProducto(){
        List<Producto> resultado = ProductoService.listarProducto();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarProducto() throws ResourceNotFoundException{
        Long id = 1L;
        ProductoService.eliminarProducto(id);
        Optional<Producto> Producto = ProductoService.buscarProductoXId(id);
        assertNotNull(Producto);
    }
}    

