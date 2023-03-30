package Grupo2.BackIntegrador.controller;

import Grupo2.BackIntegrador.model.Usuario;
import Grupo2.BackIntegrador.payload.JWTAuthResponse;
import Grupo2.BackIntegrador.payload.LoginDto;
import Grupo2.BackIntegrador.payload.RegisterDto;
import Grupo2.BackIntegrador.service.AuthService;
import Grupo2.BackIntegrador.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AutenticacionController {

    private AuthService authService;
    private UsuarioService usuarioService;

    public AutenticacionController(AuthService authService, UsuarioService usuarioService) {
        this.authService = authService;
        this.usuarioService = usuarioService;
    }

    // Construir el Login
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
        String token = authService.login(loginDto);
        Usuario usuario = usuarioService.buscarByuserNameOrEmail(loginDto.getUserNameOrEmail()).get();
        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setAccessToken(token);
        jwtAuthResponse.setUser_id(usuario.getId());
        jwtAuthResponse.setNombre(usuario.getNombre());
        jwtAuthResponse.setApellido(usuario.getApellido());
        jwtAuthResponse.setUserName(usuario.getUserName());
        jwtAuthResponse.setEmail(usuario.getEmail());
        jwtAuthResponse.setCiudad(usuario.getCiudad());
        HashSet<String> roles = new HashSet<>();
        usuario.getRoles().stream().forEach(role -> roles.add(role.getName()));
        jwtAuthResponse.setRole(roles);
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
