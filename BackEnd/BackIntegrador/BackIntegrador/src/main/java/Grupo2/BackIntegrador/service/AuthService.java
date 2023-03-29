package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.payload.LoginDto;
import Grupo2.BackIntegrador.payload.RegisterDto;

public interface AuthService {
        String login(LoginDto loginDto);

        String register(RegisterDto registerDto);

}
