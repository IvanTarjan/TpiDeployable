package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.ubicacion;
import Grupo2.BackIntegrador.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findProductosByCaracteristicaId(Caracteristica id);

    List<Producto> findByCategoria (Categoria id);

    List<Producto> findByUbicacion (ubicacion id);
}
