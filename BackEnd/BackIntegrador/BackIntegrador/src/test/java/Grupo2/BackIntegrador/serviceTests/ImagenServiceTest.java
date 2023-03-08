package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Imagen;
import Grupo2.BackIntegrador.service.ImagenService;
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
public class ImagenServiceTest {

        @Autowired
        private Grupo2.BackIntegrador.service.ImagenService ImagenService;

        @Test
        @Order(1)
        void guardarImagen() throws BadRequestException {
            Imagen ImagenUno = new Imagen(1L, "titulo", "imagen");
            Imagen guardado = ImagenService.guardarImagen(ImagenUno);
            assertEquals(1L, guardado.getId());
            assertEquals(ImagenUno.getTitulo(), guardado.getTitulo());
            assertEquals(ImagenUno.getUrl_img(), guardado.getUrl_img());
        }

        @Test
        @Order(2)
        void actualizarImagen() throws ResourceNotFoundException {
            Long id = 1L;
            Imagen actualizar = new Imagen(id, "titulo actualizado", "imagen actualizada");
            ImagenService.actualizarImagen(actualizar);
            assertEquals(id, actualizar.getId());
            assertEquals("titulo actualizado", actualizar.getTitulo());
            assertEquals("imagen actualizada", actualizar.getUrl_img());
        }

        @Test
        @Order(3)
        void buscarImagenXId() throws BadRequestException {
            Long id = 1L;
            Optional<Imagen> resultado = ImagenService.buscarImagenXId(id);
            assertNotNull(resultado);
        }

        @Test
        @Order(4)
        void listarImagen(){
            List<Imagen> resultado = ImagenService.listarimagenes();
            assertEquals(1, resultado.size());
        }

        @Test
        @Order(5)
        void eliminarImagen() throws ResourceNotFoundException{
            Long id = 1L;
            ImagenService.eliminarImagen(id);
            Optional<Imagen> Imagen = ImagenService.buscarImagenXId(id);
            assertNotNull(Imagen);
        }
    }    

