package Grupo2.BackIntegrador.Security;

import Grupo2.BackIntegrador.model.Usuario;
import Grupo2.BackIntegrador.repository.UsuarioRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService{

    private UsuarioRepository usuarioRepository;

    public CustomUserDetailsService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userNameOrEmail) throws UsernameNotFoundException {
       Usuario usuario = usuarioRepository.findByuserNameOrEmail(userNameOrEmail, userNameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con el siguiente Username o Email: " + userNameOrEmail));

        Set<GrantedAuthority> authorities = usuario.getRoles().stream().map((roles) -> new SimpleGrantedAuthority(roles.getName())).collect(Collectors.toSet());

        return new User(usuario.getEmail(),usuario.getPassword(), authorities);
    }
}
