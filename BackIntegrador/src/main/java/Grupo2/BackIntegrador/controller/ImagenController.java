package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Imagen;
import Grupo2.BackIntegrador.service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/imagen")
@CrossOrigin("*")
public class ImagenController {

    @Autowired
    private ImagenService imagenService;
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Imagen> registrarImagen(@RequestBody Imagen imagen){
        return ResponseEntity.ok(imagenService.guardarImagen(imagen));
    }

    @GetMapping
    public ResponseEntity<List<Imagen>> buscarImagenes(){
        return ResponseEntity.ok(imagenService.listarimagenes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Imagen> buscarImagenesPorId(@PathVariable long id){
        Optional<Imagen> imagenBuscada= imagenService.buscarImagenXId(id);
        if (imagenBuscada.isPresent()){
            return ResponseEntity.ok(imagenBuscada.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> borrarImagenPorId(@PathVariable Long id){
        try {
            imagenService.eliminarImagen(id);
            return ResponseEntity.ok("Se eliminó la imagen con id= "+id);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping
    public ResponseEntity<String> actualizarImagen(@RequestBody Imagen imagen){
        Optional<Imagen> imagenAActualizar= imagenService.buscarImagenXId(imagen.getId());
        if (imagenAActualizar.isPresent()){
            imagenService.actualizarImagen(imagen);
            return ResponseEntity.ok("Se actualizo la imagen con el id: "+imagen.getId());
        }
        return ResponseEntity.badRequest().body("No se puede actualizar una imagen que no existe en la base de datos");
    }

}
