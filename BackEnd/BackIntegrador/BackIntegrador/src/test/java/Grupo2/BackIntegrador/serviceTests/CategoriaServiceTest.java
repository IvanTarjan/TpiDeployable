package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.service.CategoriaService;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoriaServiceTest {

    @Autowired
    private CategoriaService CategoriaService;

    @Test
    @Order(1)
    void guardarCategoria() throws BadRequestException {
        Categoria CategoriaUno = new Categoria(1L, "titulo", "descripcion", "imagen");
        Categoria guardado = CategoriaService.guardarCategoria(CategoriaUno);
        assertEquals(1L, guardado.getId());
        assertEquals(CategoriaUno.getTitulo(), guardado.getTitulo());
        assertEquals(CategoriaUno.getDescripcion(), guardado.getDescripcion());
        assertEquals(CategoriaUno.getUrl_imagen(), guardado.getUrl_imagen());
    }

    @Test
    @Order(2)
    void actualizarCategoria() throws ResourceNotFoundException {
        Long id = 1L;
        Categoria actualizar = new Categoria(id, "titulo actualizado", "Descripcion actualizada", "imagen actualizada");
        CategoriaService.actualizarCategoria(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("titulo actualizado", actualizar.getTitulo());
        assertEquals("Descripcion actualizada", actualizar.getDescripcion());
        assertEquals("imagen actualizada", actualizar.getUrl_imagen());
    }

    @Test
    @Order(3)
    void buscarCategoriaXId() throws BadRequestException, ResourceNotFoundException {
        Long id = 1L;
        Optional<Categoria> resultado = CategoriaService.buscarCategoriaXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarCategoria(){
        List<Categoria> resultado = CategoriaService.listarCategorias();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarCategoria() throws ResourceNotFoundException{
        Long id = 1L;
        CategoriaService.eliminarCategoria(id);
        Optional<Categoria> Categoria = CategoriaService.buscarCategoriaXId(id);
        assertNotNull(Categoria);
    }
}
