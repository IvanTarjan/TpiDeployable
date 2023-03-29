package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Puntuacion;
import Grupo2.BackIntegrador.service.PuntuacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/puntuacion")
@CrossOrigin("*")
public class PuntuacionController {

    @Autowired
    private PuntuacionService puntuacionService;

    @PostMapping
    public ResponseEntity<Puntuacion> registrarPuntuacion(@RequestBody Puntuacion puntuacion){
        try {
            return ResponseEntity.ok(puntuacionService.guardarPuntuacion(puntuacion));
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Puntuacion>> buscarPuntuaciones(){
        return ResponseEntity.ok(puntuacionService.listarPuntuacion());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Puntuacion> buscarPuntuacionXId(@PathVariable Long id){
        Optional<Puntuacion> puntuacionABuscar = puntuacionService.buscarPuntuacionXId(id);
        if (puntuacionABuscar.isPresent()){
            return ResponseEntity.ok(puntuacionABuscar.get());
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPuntuacionXId(@PathVariable Long id){
        try {
            puntuacionService.eliminarPuntuacion(id);
            return ResponseEntity.ok("Se elimino la puntuacion con id ="+ id);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    public ResponseEntity<String> actualizarPuntuacion(@RequestBody Puntuacion puntuacion){
        try {
            puntuacionService.actualizarPuntuacion(puntuacion);
            return ResponseEntity.ok("Se actualizo la puntuacion con id ="+ puntuacion.getId());
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }

    }

}
