package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UbicacionRepository extends JpaRepository<Ubicacion, Long> {

    Optional<Ubicacion> findByNombre(String nombre);
}
