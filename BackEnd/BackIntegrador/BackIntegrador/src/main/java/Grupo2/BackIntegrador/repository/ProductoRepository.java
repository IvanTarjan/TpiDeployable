package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.model.Ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findProductosByCaracteristicaId(Long caracteristicaId);

    List<Producto> findByCategoria (Categoria id);

    List<Producto> findByCiudad (Ubicacion id);
}
