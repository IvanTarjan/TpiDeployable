package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.payload.JWTAuthResponse;
import Grupo2.BackIntegrador.payload.LoginDto;
import Grupo2.BackIntegrador.payload.RegisterDto;
import Grupo2.BackIntegrador.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AutenticacionController {

    private AuthService authService;

    public AutenticacionController(AuthService authService) {
        this.authService = authService;
    }

    // Construir el Login
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
        String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Construccion de registro REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> registro(@RequestBody RegisterDto registerDto){
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = {"/registeradmin"})
    public ResponseEntity<String> registroAdmin(@RequestBody RegisterDto registerDto){
        String response = authService.registerAdmin(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
