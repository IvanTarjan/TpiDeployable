package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarCategoriaPorID(@PathVariable Long id){
        Optional<Categoria> categoriaBuscada= categoriaService.buscarCategoriaXId(id);
        if (categoriaBuscada.isPresent()){
            return ResponseEntity.ok(categoriaBuscada.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> buscarCategoria(){
        return ResponseEntity.ok(categoriaService.listarCategorias());
    }

    @PostMapping
    public ResponseEntity<Categoria> registrarCategoria(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.guardarCategoria(categoria));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) throws ResourceNotFoundException {
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok("Se eliminó la categoria con id= "+id);
    }

    @PutMapping
    public ResponseEntity<String> actualizarCategoria(@RequestBody Categoria categoria){
        Optional<Categoria> categoriaAActualizar=categoriaService.buscarCategoriaXId(categoria.getId());
        if (categoriaAActualizar.isPresent()){
            categoriaService.actualizarCategoria(categoria);
            return ResponseEntity.ok("La categoria con el id= "+categoria.getId()+" fue actualizada");
        }
        else{
            return ResponseEntity.badRequest().body("No se puede actualizar una categoria que no existe en la base de datos");
        }
    }


}