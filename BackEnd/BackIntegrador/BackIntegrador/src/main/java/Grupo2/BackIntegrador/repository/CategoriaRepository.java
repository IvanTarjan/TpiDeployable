package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    Optional<Categoria> findByName(String name);
}
