package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findTutorialsByTagsId(Long tagId);
}
