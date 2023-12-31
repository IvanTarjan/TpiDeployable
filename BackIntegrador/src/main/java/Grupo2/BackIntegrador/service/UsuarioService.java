package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Usuario;
import Grupo2.BackIntegrador.repository.UsuarioRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private UsuarioRepository usuarioRepository;
    private static final Logger LOGGER=Logger.getLogger(UsuarioService.class);
    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {

        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listarUsuarios() {
        LOGGER.info("Se inició el listado de todos los usuarios");
        return usuarioRepository.findAll();
    }

    public Usuario guardarUsuario(Usuario usuario){
        LOGGER.info("Se inició una operación de guardado de los usuarios con nombre=: "+
                usuario.getNombre());
        return usuarioRepository.save(usuario);
    }

    public void actualizarUsuario(Usuario usuario) throws ResourceNotFoundException {
        Optional<Usuario> usuarioAActualizar = buscarUsuarioXId(usuario.getId());
        if (usuarioAActualizar.isPresent()){
            LOGGER.info("Se inició una operación de actualización de un usuario con id="+
                    usuario.getId());
            usuarioRepository.save(usuario);
        } else {
            throw new ResourceNotFoundException("el usuario con id= "+usuario.getId()+" no existe, no se puede actualizar");
        }

    }

    public void eliminarUsuario(Long id) throws ResourceNotFoundException {
        Optional<Usuario> usuarioaAEliminar=buscarUsuarioXId(id);
        if (usuarioaAEliminar.isPresent()){
            LOGGER.warn("Se realizo una operación de eliminación de los Usuarios con id= "+id);
            usuarioRepository.deleteById(id);
        }
        else{
            throw new ResourceNotFoundException("el usuario con id= "+id+" no existe");
        }
    }

    public Optional<Usuario> buscarUsuarioXId(Long id){
        LOGGER.info("Se inicio la busqueda de un usuario con id= "+ id);
        return usuarioRepository.findById(id);
    }

    public Optional<Usuario> buscarByuserNameOrEmail(String usernameOrEmail){
        LOGGER.info("Se inicio la busqueda de un usuario con username o email = "+ usernameOrEmail );
        return usuarioRepository.findByuserNameOrEmail(usernameOrEmail, usernameOrEmail);
    }

    public String verificarUsuarioXid(String username) throws ResourceNotFoundException{
        if (usuarioRepository.existsByuserName(username)){
            usuarioRepository.verifyUser(username);
            LOGGER.info("Se verifico el usuario con username= "+ username);
            return "Se verifico el usuario con username = "+ username;
        } else {
            throw new ResourceNotFoundException("No se encontro el usuario para verificar");
        }

    }
}
