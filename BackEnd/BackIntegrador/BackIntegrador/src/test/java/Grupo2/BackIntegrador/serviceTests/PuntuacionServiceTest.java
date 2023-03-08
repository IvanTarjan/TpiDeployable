package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Puntuacion;
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
public class PuntuacionServiceTest {

    @Autowired
    private Grupo2.BackIntegrador.service.PuntuacionService PuntuacionService;

    @Test
    @Order(1)
    void guardarPuntuacion() throws BadRequestException, ResourceNotFoundException {
        Puntuacion PuntuacionUno = new Puntuacion(1L, 4);
        Puntuacion guardado = PuntuacionService.guardarPuntuacion(PuntuacionUno);
        assertEquals(1L, guardado.getId());
        assertEquals(4, guardado.getPuntuacion());
    }

    @Test
    @Order(2)
    void actualizarPuntuacion() throws ResourceNotFoundException {
        Long id = 1L;
        Puntuacion actualizar = new Puntuacion(id, 5);
        PuntuacionService.actualizarPuntuacion(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals(5, actualizar.getPuntuacion());
    }

    @Test
    @Order(3)
    void buscarPuntuacionXId() throws BadRequestException {
        Long id = 1L;
        Optional<Puntuacion> resultado = PuntuacionService.buscarPuntuacionXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarPuntuacion(){
        List<Puntuacion> resultado = PuntuacionService.listarPuntuacion();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarPuntuacion() throws ResourceNotFoundException{
        Long id = 1L;
        PuntuacionService.eliminarPuntuacion(id);
        Optional<Puntuacion> Puntuacion = PuntuacionService.buscarPuntuacionXId(id);
        assertNotNull(Puntuacion);
    }
}

