package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.model.Ubicacion;
import Grupo2.BackIntegrador.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ubicacion")
public class UbicacionController {

    @Autowired
    private UbicacionService ubicacionService;

    @PostMapping
    public ResponseEntity<Ubicacion> registrarUbicacion(@RequestBody Ubicacion ubicacion){
        return ResponseEntity.ok(ubicacionService.guardarUbicacion(ubicacion));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ubicacion> buscarUbicacionPorID(@PathVariable Long id){
        Optional<Ubicacion> ubicacionBuscada= ubicacionService.buscarUbicacionXId(id);
        if (ubicacionBuscada.isPresent()){
            return ResponseEntity.ok(ubicacionBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Ubicacion>> buscarUbicacion(){
        return ResponseEntity.ok(ubicacionService.listarUbicacion());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarUbicacion(@PathVariable Long id) throws ResourceNotFoundException {
        ubicacionService.eliminarUbicacion(id);
        return ResponseEntity.ok("Se eliminó la ubicacion con id= "+id);
    }

    @PutMapping
    public ResponseEntity<String> actualizarUbicacion(@RequestBody Ubicacion ubicacion){
        try {
            ubicacionService.actualizarUbicacion(ubicacion);
            return ResponseEntity.ok("La ubicacion con el id= "+ubicacion.getId()+" fue actualizada");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body("No se puede actualizar una ubicacion que no existe en la base de datos");
        }
    }

}
