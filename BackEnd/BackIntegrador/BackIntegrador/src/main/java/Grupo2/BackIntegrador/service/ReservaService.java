package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.model.Reserva;
import Grupo2.BackIntegrador.repository.ReservaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ReservaService {

    private ReservaRepository reservaRepository;
    private static final Logger LOGGER=Logger.getLogger(ReservaService.class);
    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {

        this.reservaRepository = reservaRepository;
    }

    public List<Reserva> listarReserva() {
        LOGGER.info("Se inició el listado de todas las reservas");
        return reservaRepository.findAll();
    }

    public Reserva guardarReserva(Reserva reserva){
        LOGGER.info("Se inició una operación de guardado de la reserva con id=: "+
                reserva.getId());
        return reservaRepository.save(reserva);
    }

    public void actualizarReserva(Reserva reserva){
        LOGGER.info("Se inició una operación de actualización de la reserva con id="+
                reserva.getId());
        reservaRepository.save(reserva);
    }

    public void eliminarReserva(Long id) throws ResourceNotFoundException {
        Optional<Reserva> reservaAEliminar=buscarReservaXId(id);
        if (reservaAEliminar.isPresent()){
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

}