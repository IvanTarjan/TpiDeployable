package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Reserva;
import Grupo2.BackIntegrador.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> buscarReservaPorID(@PathVariable Long id){
        Optional<Reserva> reservaBuscada;
        try {
            reservaBuscada = reservaService.buscarReservaXId(id);
            return ResponseEntity.ok(reservaBuscada.get());
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping
    public ResponseEntity<List<Reserva>> buscarReserva(){
        return ResponseEntity.ok(reservaService.listarReserva());
    }

    @PostMapping
    public ResponseEntity<Reserva> registrarReserva(@RequestBody Reserva reserva){
        return ResponseEntity.ok(reservaService.guardarReserva(reserva));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarReserva(@PathVariable Long id) throws ResourceNotFoundException {
        reservaService.eliminarReserva(id);
        return ResponseEntity.ok("Se eliminó la reserva con id= "+id);
    }

    @PutMapping
    public ResponseEntity<String> actualizarReserva(@RequestBody Reserva reserva){
        Optional<Reserva> reservaBuscada;
        try {
            reservaBuscada = reservaService.buscarReservaXId(reserva.getId());
            reservaService.actualizarReserva(reserva);
            return ResponseEntity.ok("La reserva con el id= "+reserva.getId()+" fue actualizada");
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.badRequest().body("No se puede actualizar una reserva que no existe en la base de datos");
        }
    }


}
