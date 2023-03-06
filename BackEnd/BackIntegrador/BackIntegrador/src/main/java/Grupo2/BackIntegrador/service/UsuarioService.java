package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
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

    public void actualizarUsuario(Usuario usuario){
        LOGGER.info("Se inició una operación de actualización de un usuario con id="+
                usuario.getId());
        usuarioRepository.save(usuario);
    }

    public void eliminarUsuario(Long id) throws ResourceNotFoundException {
        buscarUsuarioXId(id);
        usuarioRepository.deleteById(id);
        LOGGER.warn("Se realizo una operación de eliminación de los Usuarios con id= "+id);
    }

    public Optional<Usuario> buscarUsuarioXId(Long id) throws ResourceNotFoundException {
        Optional<Usuario> usuarioaABuscar=usuarioRepository.findById(id);
        if (usuarioaABuscar.isPresent()){
            LOGGER.info("Se inició una operación de búsqueda de un usuario con id="+id);
            return usuarioaABuscar;
        }
        else{
            throw new ResourceNotFoundException("el usuario con id= "+id+" no existe");
        }
    }
}
