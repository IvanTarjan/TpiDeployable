package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/caracteristica")
@CrossOrigin("*")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> buscarCaracteristicaPorID(@PathVariable Long id){
        Optional<Caracteristica> caracteristicaBuscada= caracteristicaService.buscarCaracteristicaXId(id);
        if (caracteristicaBuscada.isPresent()){
            return ResponseEntity.ok(caracteristicaBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Caracteristica>> buscarCaracteristica(){
        return ResponseEntity.ok(caracteristicaService.listarCaracteristica());
    }

    @PostMapping
    public ResponseEntity<Caracteristica> registrarCaracteristica(@RequestBody Caracteristica caracteristica){
        return ResponseEntity.ok(caracteristicaService.guardarCaracteristica(caracteristica));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCaracteristica(@PathVariable Long id) throws ResourceNotFoundException {
        caracteristicaService.eliminarCaracteristica(id);
        return ResponseEntity.ok("Se eliminó la caracteristica con id= "+id);
    }

    @PutMapping
    public ResponseEntity<String> actualizarCaracteristica(@RequestBody Caracteristica caracteristica){
        Optional<Caracteristica> caracteristicaAActualizar=caracteristicaService.buscarCaracteristicaXId(caracteristica.getId());
        if (caracteristicaAActualizar.isPresent()){
            caracteristicaService.actualizarCaracteristica(caracteristica);
            return ResponseEntity.ok("La caracteristica con el id= "+caracteristica.getId()+" fue actualizada");
        }
        else{
            return ResponseEntity.badRequest().body("No se puede actualizar una caracteristica que no existe en la base de datos");
        }
    }


}
