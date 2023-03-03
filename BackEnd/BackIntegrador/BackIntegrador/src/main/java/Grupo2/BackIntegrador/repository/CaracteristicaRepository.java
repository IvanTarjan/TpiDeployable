package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long> {

    List<Caracteristica> findCaracteristicasByProductoId(Producto id);
}
