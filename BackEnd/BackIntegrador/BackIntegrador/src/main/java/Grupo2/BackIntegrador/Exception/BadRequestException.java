package Grupo2.BackIntegrador.Exception;

public class BadRequestException extends Exception{
    public BadRequestException(String mensaje){
        super(mensaje);
    }
}
