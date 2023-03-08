package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Politica;
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
public class PoliticaServiceTest {

        @Autowired
        private Grupo2.BackIntegrador.service.PoliticaService PoliticaService;

        @Test
        @Order(1)
        void guardarPolitica() throws BadRequestException {
            Politica PoliticaUno = new Politica(1L, "titulo", "Descripcion");
            Politica guardado = PoliticaService.guardarPolitica(PoliticaUno);
            assertEquals(1L, guardado.getId());
            assertEquals(PoliticaUno.getTitulo(), guardado.getTitulo());
            assertEquals(PoliticaUno.getDescripcion(), guardado.getDescripcion());
        }

        @Test
        @Order(2)
        void actualizarPolitica() throws ResourceNotFoundException {
            Long id = 1L;
            Politica actualizar = new Politica(id, "titulo actualizado", "Descripcion actualizada");
            PoliticaService.actualizarPolitica(actualizar);
            assertEquals(id, actualizar.getId());
            assertEquals("titulo actualizado", actualizar.getTitulo());
            assertEquals("Descripcion actualizada", actualizar.getDescripcion());
        }

        @Test
        @Order(3)
        void buscarPoliticaXId() throws BadRequestException {
            Long id = 1L;
            Optional<Politica> resultado = PoliticaService.buscarPoliticaXId(id);
            assertNotNull(resultado);
        }

        @Test
        @Order(4)
        void listarPolitica(){
            List<Politica> resultado = PoliticaService.listarPoliticas();
            assertEquals(1, resultado.size());
        }

        @Test
        @Order(5)
        void eliminarPolitica() throws ResourceNotFoundException{
            Long id = 1L;
            PoliticaService.eliminarPolitica(id);
            Optional<Politica> Politica = PoliticaService.buscarPoliticaXId(id);
            assertNotNull(Politica);
        }
    }    
