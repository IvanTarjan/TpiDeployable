package Grupo2.BackIntegrador.service.impl;

import Grupo2.BackIntegrador.exception.APIException;
import Grupo2.BackIntegrador.Security.JwtTokenProvider;
import Grupo2.BackIntegrador.model.Roles;
import Grupo2.BackIntegrador.model.Usuario;
import Grupo2.BackIntegrador.payload.LoginDto;
import Grupo2.BackIntegrador.payload.RegisterDto;
import Grupo2.BackIntegrador.repository.RolesRepository;
import Grupo2.BackIntegrador.repository.UsuarioRepository;
import Grupo2.BackIntegrador.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UsuarioRepository usuarioRepository;
    private RolesRepository rolesRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;


    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UsuarioRepository usuarioRepository,
                           RolesRepository rolesRepository,
                           PasswordEncoder passwordEncoder,
                           JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.usuarioRepository = usuarioRepository;
        this.rolesRepository = rolesRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public String login(LoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUserNameOrEmail(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }

    @Override
    public String register(RegisterDto registerDto) {

        // chequear si el username esta en la base de datos
        if (usuarioRepository.existsByuserName(registerDto.getUserName())) {
            throw new APIException(HttpStatus.BAD_REQUEST, "El Username ya existe!.");
        }

        // achequeasi si el email esta en la base de datos
        if (usuarioRepository.existsByEmail(registerDto.getEmail())) {
            throw new APIException(HttpStatus.BAD_REQUEST, "El Email ya existe!.");
        }

        Usuario usuario = new Usuario();
        usuario.setNombre(registerDto.getNombre());
        usuario.setUserName(registerDto.getUserName());
        usuario.setEmail(registerDto.getEmail());
        usuario.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Roles> roles = new HashSet<>();
        Roles userRole = rolesRepository.findByName("ROLE_USER").get();
        roles.add(userRole);
        usuario.setRoles(roles);

        usuarioRepository.save(usuario);

        return "El Usuario ha sido registrado exitosamente!.";
    }
}
