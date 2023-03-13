package Grupo2.BackIntegrador.repository;

import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.Ubicacion;
import Grupo2.BackIntegrador.model.Producto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findProductosByCaracteristicaId(Caracteristica id);

    List<Producto> findByCategoria (Categoria id);

    List<Producto> findByUbicacion (Ubicacion id);

    @Query(nativeQuery=true, value="SELECT *  FROM productos ORDER BY random() LIMIT :nrOfProds")
    List<Producto> findXRandomProducts(@Param("nrOfProds") int nrOfProds);


}
