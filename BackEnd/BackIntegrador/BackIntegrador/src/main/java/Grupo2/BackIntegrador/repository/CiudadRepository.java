package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CiudadRepository extends JpaRepository<Ciudad, Long> {

    Optional<Ciudad> findByNombre(String nombre);
}
