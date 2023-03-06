package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.model.Ubicacion;
import Grupo2.BackIntegrador.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ubicacion")
public class UbicacionController {

    @Autowired
    private UbicacionService ubicacionService;

    @PostMapping
    public ResponseEntity<Ubicacion> registrarUbicacion(@RequestBody Ubicacion ubicacion){
        return ResponseEntity.ok(ubicacionService.guardarUbicacion(ubicacion));
    }

}
