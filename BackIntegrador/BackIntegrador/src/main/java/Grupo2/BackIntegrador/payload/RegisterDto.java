package Grupo2.BackIntegrador.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {
    private String nombre;
    private String apellido;
    private String userName;
    private String email;
    private String password;
    private String ciudad;
}
