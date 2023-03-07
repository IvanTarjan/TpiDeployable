package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Puntuacion;
import Grupo2.BackIntegrador.model.Reserva;
import Grupo2.BackIntegrador.repository.PuntuacionRepository;
import Grupo2.BackIntegrador.repository.ReservaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PuntuacionService {

    private PuntuacionRepository puntuacionRepository;
    private ProductoService productoService;
    private UsuarioService usuarioService;

    private static final Logger LOGGER=Logger.getLogger(PuntuacionService.class);

    @Autowired
    public PuntuacionService(PuntuacionRepository puntuacionRepository, ProductoService productoService, UsuarioService usuarioService){
        this.puntuacionRepository = puntuacionRepository;
        this.productoService = productoService;
        this.usuarioService = usuarioService;
    }

    public Puntuacion guardarPuntuacion (Puntuacion puntuacion) throws ResourceNotFoundException {
        LOGGER.info("Se inició una operación de guardado de la r eserva con id=: "+
                puntuacion.getId());
        if (productoService.buscarProductoXId(puntuacion.getProducto().getId()).isPresent() && usuarioService.buscarUsuarioXId(puntuacion.getUsuario().getId()).isPresent()){
            return puntuacionRepository.save(puntuacion);
        } else {
            throw new ResourceNotFoundException("No se encontro el usuario o el producto");
        }
    }

    public List<Puntuacion> listarPuntuacion(){
        LOGGER.info("Se inicio el listado de todas las puntuaciones");
        return puntuacionRepository.findAll();
    }

    public Optional<Puntuacion> buscarPuntuacionXId(Long id){
        LOGGER.info("Se inicio la busqueda de una puntuacion con id= "+ id);
        return puntuacionRepository.findById(id);
    }

    public void eliminarPuntuacion(Long id) throws ResourceNotFoundException {
        Optional<Puntuacion> puntuacionAEliminar = buscarPuntuacionXId(id);
        if (puntuacionAEliminar.isPresent()){
            puntuacionAEliminar.get().getProducto().removePuntuacion(puntuacionAEliminar.get());
            puntuacionAEliminar.get().getUsuario().removePuntuacion(puntuacionAEliminar.get());
            puntuacionRepository.deleteById(id);
            LOGGER.warn("Se elimino la puntuacion con id= "+ id);
        }else {
            throw new ResourceNotFoundException("No se pudo eliminar la puntuacion con id = "+id+", no se pudo encontrar en la base de datos");
        }
    }
    public Puntuacion actualizarPuntuacion(Puntuacion puntuacion) throws ResourceNotFoundException {
        Optional<Puntuacion> puntuacionAActualizar = buscarPuntuacionXId(puntuacion.getId());
        if (puntuacionAActualizar.isPresent()){
            LOGGER.info("Se actualizo la puntuacion con id= "+ puntuacion.getId());
            return puntuacionRepository.save(puntuacion);
        } else {
            throw new ResourceNotFoundException("No se pudo actualizar la puntuacion con id = "+puntuacion.getId()+", no se pudo encontrar en la base de datos");
        }
    }



}
