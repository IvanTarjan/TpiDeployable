package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Reserva;
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
public class ReservaServiceTest {

    @Autowired
    private Grupo2.BackIntegrador.service.ReservaService ReservaService;

    @Test
    @Order(1)
    void guardarReserva() throws BadRequestException, ResourceNotFoundException {
        Reserva ReservaUno = new Reserva(1L, "7/03/2023", "12/03/2023");
        Reserva guardado = ReservaService.guardarReserva(ReservaUno);
        assertEquals(1L, guardado.getId());
        assertEquals(ReservaUno.getFecha_inicio(), guardado.getFecha_inicio());
        assertEquals(ReservaUno.getFecha_fin(), guardado.getFecha_fin());
    }

    @Test
    @Order(2)
    void actualizarReserva() throws ResourceNotFoundException {
        Long id = 1L;
        Reserva actualizar = new Reserva(id, "10/03/2023", "22/03/2023");
        ReservaService.actualizarReserva(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("10/03/2023", actualizar.getFecha_inicio());
        assertEquals("22/03/2023", actualizar.getFecha_fin());
    }

    @Test
    @Order(3)
    void buscarReservaXId() throws BadRequestException {
        Long id = 1L;
        Optional<Reserva> resultado = ReservaService.buscarReservaXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarReserva(){
        List<Reserva> resultado = ReservaService.listarReserva();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarReserva() throws ResourceNotFoundException{
        Long id = 1L;
        ReservaService.eliminarReserva(id);
        Optional<Reserva> Reserva = ReservaService.buscarReservaXId(id);
        assertNotNull(Reserva);
    }
}    
