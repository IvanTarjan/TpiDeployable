package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {

    List<Reserva> findByUsuarioId (Long usuarioId);

}