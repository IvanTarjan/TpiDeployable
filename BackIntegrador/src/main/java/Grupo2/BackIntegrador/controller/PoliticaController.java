package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Politica;
import Grupo2.BackIntegrador.service.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/politica")
@CrossOrigin("*")
public class PoliticaController {

    @Autowired
    private PoliticaService politicaService;

    @GetMapping("/{id}")
    public ResponseEntity<Politica> buscarPoliticaPorID(@PathVariable Long id) {
        Optional<Politica> PoliticaBuscada = politicaService.buscarPoliticaXId(id);
        if (PoliticaBuscada.isPresent()) {
            return ResponseEntity.ok(PoliticaBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Politica>> buscarPolitica() {
        return ResponseEntity.ok(politicaService.listarPoliticas());
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Politica> registrarPolitica(@RequestBody Politica politica) {
        return ResponseEntity.ok(politicaService.guardarPolitica(politica));
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarPolitica(@PathVariable Long id) throws ResourceNotFoundException {
        politicaService.eliminarPolitica(id);
        return ResponseEntity.ok("Se eliminó la politica con id= " + id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping
    public ResponseEntity<String> actualizarPolitica(@RequestBody Politica politica){
        try {
            politicaService.actualizarPolitica(politica);
            return ResponseEntity.ok("La politica con el id= "+politica.getId()+" fue actualizada");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body("No se puede actualizar una politica que no existe en la base de datos");
        }
    }
}