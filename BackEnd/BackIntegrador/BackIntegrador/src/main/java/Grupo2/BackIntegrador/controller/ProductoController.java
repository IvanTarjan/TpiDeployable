package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin("*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProductoPorID(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Producto> productoBuscado= productoService.buscarProductoXId(id);
        if (productoBuscado.isPresent()){
            return ResponseEntity.ok(productoBuscado.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Producto>> buscarProductos(){
        return ResponseEntity.ok(productoService.listarProducto());
    }

    @PostMapping
    public ResponseEntity<Producto> registrarProducto(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.guardarProducto(producto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Long id){
        try {
            productoService.eliminarProducto(id);
            return ResponseEntity.ok("Se eliminó la producto con id= "+id);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> actualizarProducto(@RequestBody Producto producto){
        try {
            productoService.actualizarProducto(producto);
            return ResponseEntity.ok("Se actualizo el producto con id= "+producto.getId());
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body("No se puede actualizar una producto que no existe en la base de datos");
        }
    }

    @GetMapping("/c/{categoriaTitulo}")
    public ResponseEntity<List<Producto>> buscarProductosPorCategoria(@PathVariable String categoriaTitulo){
        return ResponseEntity.ok(productoService.buscarProductoPorCategoria(categoriaTitulo));
    }

    @GetMapping("/u/{ubicacionId}")
    public ResponseEntity<List<Producto>> buscarProductosPorUbicacion(@PathVariable Long ubicacionId){
        return ResponseEntity.ok(productoService.buscarProductoPorUbicacion(ubicacionId));
    }

    @GetMapping("/q/{nrOfProds}")
    public ResponseEntity<List<Producto>> buscarXProductosRandom(@PathVariable Integer nrOfProds){
        return ResponseEntity.ok(productoService.buscarXProductosRandom(nrOfProds));
    }

    @GetMapping("/dates/{fecha_inicio}/{fecha_fin}")
    public ResponseEntity<List<Producto>> buscarProductoPorFecha_inicioAndFecha_fin(
            @PathVariable("fecha_inicio") Date fecha_inicio , @PathVariable("fecha_fin") Date fecha_fin){
        return ResponseEntity.ok(productoService.buscarProductosPorFecha_inicioAndFecha_fin(fecha_inicio, fecha_fin));
    }

    @GetMapping("/datesAndUbi/{fecha_inicio}/{fecha_fin}/{ubicacionId}")
    public ResponseEntity<List<Producto>> buscarProductoPorFecha_inicioAndFecha_finAndUbicacionId(
            @PathVariable("fecha_inicio") Date fecha_inicio , @PathVariable("fecha_fin") Date fecha_fin, @PathVariable("ubicacionId") Long ubicacionId){
        return ResponseEntity.ok(productoService.buscarProductosPorFecha_inicioAndFecha_finAndUbicacionId(fecha_inicio, fecha_fin, ubicacionId));
    }


}

