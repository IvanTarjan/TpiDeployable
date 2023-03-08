package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/producto")
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


}

