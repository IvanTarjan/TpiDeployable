package Grupo2.BackIntegrador.serviceTests;

import Grupo2.BackIntegrador.Exception.BadRequestException;
import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Usuario;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UsuarioServiceTest {

    @Autowired
    private Grupo2.BackIntegrador.service.UsuarioService UsuarioService;

    @Test
    @Order(1)
    void guardarUsuario() throws BadRequestException, ResourceNotFoundException {
        Usuario UsuarioUno = new Usuario(1L, "nombre", "user", "user@gmail.com", "contraseña");
        Usuario guardado = UsuarioService.guardarUsuario(UsuarioUno);
        assertEquals(1L, guardado.getId());
        assertEquals(UsuarioUno.getNombre(), guardado.getNombre());
        assertEquals(UsuarioUno.getUserName(), guardado.getUserName());
        assertEquals(UsuarioUno.getEmail(), guardado.getEmail());
        assertEquals(UsuarioUno.getPassword(), guardado.getPassword());
    }

    @Test
    @Order(2)
    void actualizarUsuario() throws ResourceNotFoundException {
        Long id = 1L;
        Usuario actualizar = new Usuario(id, "nombre actualizado", "user actualizado", "juan@gmail.com", "contraseña nueva");
        UsuarioService.actualizarUsuario(actualizar);
        assertEquals(id, actualizar.getId());
        assertEquals("nombre actualizado", actualizar.getNombre());
        assertEquals("user actualizado", actualizar.getUserName());
        assertEquals("juan@gmail.com", actualizar.getEmail());
        assertEquals("contraseña nueva", actualizar.getPassword());
    }

    @Test
    @Order(3)
    void buscarUsuarioXId() throws BadRequestException {
        Long id = 1L;
        Optional<Usuario> resultado = UsuarioService.buscarUsuarioXId(id);
        assertNotNull(resultado);
    }

    @Test
    @Order(4)
    void listarUsuario(){
        List<Usuario> resultado = UsuarioService.listarUsuarios();
        assertEquals(1, resultado.size());
    }

    @Test
    @Order(5)
    void eliminarUsuario() throws ResourceNotFoundException{
        Long id = 1L;
        UsuarioService.eliminarUsuario(id);
        Optional<Usuario> Usuario = UsuarioService.buscarUsuarioXId(id);
        assertNotNull(Usuario);
    }
}  
