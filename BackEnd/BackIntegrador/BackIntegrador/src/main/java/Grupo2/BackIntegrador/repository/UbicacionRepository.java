package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UbicacionRepository extends JpaRepository<ubicacion, Long> {

    Optional<ubicacion> findByNombre(String nombre);
}
