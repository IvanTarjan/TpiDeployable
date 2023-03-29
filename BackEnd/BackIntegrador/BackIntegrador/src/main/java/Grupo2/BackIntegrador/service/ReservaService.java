package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Reserva;
import Grupo2.BackIntegrador.repository.ReservaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private ReservaRepository reservaRepository;

    private ProductoService productoService;
    private UsuarioService usuarioService;
    private static final Logger LOGGER=Logger.getLogger(ReservaService.class);
    @Autowired
    public ReservaService(ReservaRepository reservaRepository, ProductoService productoService, UsuarioService usuarioService) {
        this.reservaRepository = reservaRepository;
        this.productoService = productoService;
        this.usuarioService = usuarioService;
    }

    public List<Reserva> listarReserva() {
        LOGGER.info("Se inició el listado de todas las reservas");
        return reservaRepository.findAll();
    }

    public Reserva guardarReserva(Reserva reserva) throws ResourceNotFoundException {
        LOGGER.info("Se inició una operación de guardado de la reserva con id=: "+
                reserva.getId());
        if (productoService.buscarProductoXId(reserva.getProducto().getId()).isPresent() && usuarioService.buscarUsuarioXId(reserva.getUsuario().getId()).isPresent()){
            return reservaRepository.save(reserva);
        } else {
            throw new ResourceNotFoundException("No se encontro el usuario o el producto");
        }
    }

    public void actualizarReserva(Reserva reserva) throws ResourceNotFoundException {
        Optional<Reserva> reservaAActualizar = buscarReservaXId(reserva.getId());
        if (reservaAActualizar.isPresent()){
            LOGGER.info("Se actualizo la reserva con id= "+ reserva.getId());
            reservaRepository.save(reserva);
        } else {
            throw new ResourceNotFoundException("No se pudo actualizar la reserva con id = "+reserva.getId()+", no se pudo encontrar en la base de datos");
        }
    }

    public void eliminarReserva(Long id) throws ResourceNotFoundException {
        Optional<Reserva> reservaAEliminar=buscarReservaXId(id);
        if (reservaAEliminar.isPresent()){
            reservaAEliminar.get().getProducto().removeReserva(reservaAEliminar.get());
            reservaAEliminar.get().getUsuario().removeReserva(reservaAEliminar.get());
            reservaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la reserva con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La reserva a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Reserva> buscarReservaXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la reserva con id="+id);
        return reservaRepository.findById(id);
    }

    public List<Reserva> buscarReservaPorUsuario(Long usuarioId) {
        LOGGER.info("Se inició una busqueda de todas las reservas con usuario id=" + usuarioId);
        return reservaRepository.findByUsuarioId(usuarioId);
    }

}