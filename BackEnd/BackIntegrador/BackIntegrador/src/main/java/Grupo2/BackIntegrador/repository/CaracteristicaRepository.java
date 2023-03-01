package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long> {

    List<Caracteristica> findTagsByTutorialsId(Long tutorialId);
}
