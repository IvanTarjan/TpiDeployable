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

import java.sql.Date;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    List<Producto> findProductosByCaracteristicaId(Caracteristica id);

    List<Producto> findByCategoriaId (Long categoriaId);

    List<Producto> findByUbicacionId (Long ubicacionId);

    @Query(nativeQuery=true, value="SELECT *  FROM producto ORDER BY RAND() LIMIT ?1")
    List<Producto> findXRandomProducts(Integer nrOfProds);

    @Query(nativeQuery = true,value = "SELECT Distinct p.*" +
            "FROM producto p " +
            "LEFT JOIN reserva r ON p.id = r.producto_id GROUP BY p.id " +
            "having min((r.fecha_inicio > ?1 AND r.fecha_inicio > ?2) " +
            "OR (r.fecha_fin < ?1 AND r.fecha_fin < ?2) " +
            "OR (r.fecha_inicio is null AND r.fecha_fin is null)) = 1")
    List<Producto> findAllAvailableByFecha_inicioAndFecha_fin(Date fecha_inicio , Date fecha_fin);

    @Query(nativeQuery = true,value = "SELECT Distinct p.*" +
            "FROM producto p " +
            "LEFT JOIN reserva r ON p.id = r.producto_id where p.ubicacion_id = ?3 GROUP BY p.id " +
            "having min((r.fecha_inicio > ?1 AND r.fecha_inicio > ?2) " +
            "OR (r.fecha_fin < ?1 AND r.fecha_fin < ?2) " +
            "OR (r.fecha_inicio is null AND r.fecha_fin is null)) = 1")
    List<Producto> findAllAvailableByFecha_inicioAndFecha_finAndUbicacionId(Date fecha_inicio , Date fecha_fin, Long ubicacionId);

}
