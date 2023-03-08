package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.service.CaracteristicaService;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CaracteristicaServiceTests {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @Test
    @Order(1)
    void guardarCaracteristica() throws BadRequestException {
        Caracteristica caracteristicaUno = new Caracteristica(1L, "titulo caracteristica", "icono uno");
        Caracteristica guardado = caracteristicaService.guardarCaracteristica(caracteristicaUno);
        assertEquals(1L, guardado.getId());
        assertEquals(caracteristicaUno.getTitulo(), guardado.getTitulo());
        assertEquals(caracteristicaUno.getIcono(), guardado.getIcono());
    }

    @Test
    @Order(2)
    void actualizarCaracteristica() throws ResourceNotFoundException{
        Long id = 1L;
        Caracteristica actualizar = new Caracteristica(id, "titulo actualizado", "icono actualizado");
        caracteristicaService.actualizarCaracteristica(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("titulo actualizado", actualizar.getTitulo());
        assertEquals("icono actualizado", actualizar.getIcono());
    }

    @Test
    @Order(3)
    void buscarCaracteristicaXId() throws BadRequestException{
        Long id = 1L;
        Optional<Caracteristica> resultado = caracteristicaService.buscarCaracteristicaXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarCaracteristica(){
        List<Caracteristica> resultado = caracteristicaService.listarCaracteristica();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarCaracteristica() throws ResourceNotFoundException{
        Long id = 1L;
        caracteristicaService.eliminarCaracteristica(id);
        Optional<Caracteristica> caracteristica = caracteristicaService.buscarCaracteristicaXId(id);
        assertNotNull(caracteristica);
    }
}
