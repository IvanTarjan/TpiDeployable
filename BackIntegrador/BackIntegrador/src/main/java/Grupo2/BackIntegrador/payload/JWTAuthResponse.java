package Grupo2.BackIntegrador.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JWTAuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Long user_id;
    private String nombre;
    private String apellido;
    private String userName;
    private String email;
    private String ciudad;
    private HashSet<String> role;
}
