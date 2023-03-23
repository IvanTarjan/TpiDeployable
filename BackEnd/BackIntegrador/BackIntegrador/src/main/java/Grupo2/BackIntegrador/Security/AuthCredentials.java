package Grupo2.BackIntegrador.Security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

@Getter @Setter
public class AuthCredentials {
    private String email;
    private String password;
}
