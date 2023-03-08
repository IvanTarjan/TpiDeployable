package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Ubicacion;
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
public class UbicacionServiceTest {

    @Autowired
    private Grupo2.BackIntegrador.service.UbicacionService UbicacionService;

    @Test
    @Order(1)
    void guardarUbicacion() throws BadRequestException, ResourceNotFoundException {
        Ubicacion UbicacionUno = new Ubicacion(1L, "nombre", "pais");
        Ubicacion guardado = UbicacionService.guardarUbicacion(UbicacionUno);
        assertEquals(1L, guardado.getId());
        assertEquals(UbicacionUno.getNombre(), guardado.getNombre());
        assertEquals(UbicacionUno.getPais(), guardado.getPais());
    }

    @Test
    @Order(2)
    void actualizarUbicacion() throws ResourceNotFoundException {
        Long id = 1L;
        Ubicacion actualizar = new Ubicacion(id, "nombre actualizado", "pais actualizado");
        UbicacionService.actualizarUbicacion(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("nombre actualizado", actualizar.getNombre());
        assertEquals("pais actualizado", actualizar.getPais());
    }

    @Test
    @Order(3)
    void buscarUbicacionXId() throws BadRequestException {
        Long id = 1L;
        Optional<Ubicacion> resultado = UbicacionService.buscarUbicacionXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarUbicacion(){
        List<Ubicacion> resultado = UbicacionService.listarUbicacion();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarUbicacion() throws ResourceNotFoundException{
        Long id = 1L;
        UbicacionService.eliminarUbicacion(id);
        Optional<Ubicacion> Ubicacion = UbicacionService.buscarUbicacionXId(id);
        assertNotNull(Ubicacion);
    }
}  
