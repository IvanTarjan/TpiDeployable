package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Ciudad;
import Grupo2.BackIntegrador.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ciudad")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> buscarCiudadPorID(@PathVariable Long id){
        Optional<Ciudad> ciudadBuscada= ciudadService.buscarCiudadXId(id);
        if (ciudadBuscada.isPresent()){
            return ResponseEntity.ok(ciudadBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Ciudad>> buscarCiudada(){
        return ResponseEntity.ok(ciudadService.listarCiudad());
    }

    @PostMapping
    public ResponseEntity<Ciudad> registrarCiudad(@RequestBody Ciudad ciudad){
        return ResponseEntity.ok(ciudadService.guardarCiudad(ciudad));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Long id) throws ResourceNotFoundException {
        ciudadService.eliminarCiudad(id);
        return ResponseEntity.ok("Se eliminó la ciudad con id= "+id);
    }

    @PutMapping
    public ResponseEntity<String> actualizarCiudad(@RequestBody Ciudad ciudad){
        Optional<Ciudad> ciudadAActualizar=ciudadService.buscarCiudadXId(ciudad.getId());
        if (ciudadAActualizar.isPresent()){
            ciudadService.actualizarCiudad(ciudad);
            return ResponseEntity.ok("La ciudad con el id= "+ciudad.getId()+" fue actualizada");
        }
        else{
            return ResponseEntity.badRequest().body("No se puede actualizar una ciudad que no existe en la base de datos");
        }
    }


}
