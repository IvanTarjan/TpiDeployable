//package Grupo2.BackIntegrador.Security;
//
//import Grupo2.BackIntegrador.model.Reserva;
//import Grupo2.BackIntegrador.model.Usuario;
//import Grupo2.BackIntegrador.model.UsuarioRole;
//import Grupo2.BackIntegrador.repository.UsuarioRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Component;
//
//import java.util.HashSet;
//
//@Component
//public class LoadInitialData implements ApplicationRunner {
//
//    @Autowired
//    private UsuarioRepository usuarioRepository;
//
//
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        BCryptPasswordEncoder cifrador = new BCryptPasswordEncoder();
//
//        String passwordCifrrada = cifrador.encode("clabe1234");
//
//        Usuario usuario = new Usuario("Usuario", "username", "emailuser", passwordCifrrada,UsuarioRole.ROLE_USER);
//        Usuario usuarioAdmin = new Usuario("Admin", "adminname", "emailadmin", passwordCifrrada,UsuarioRole.ROLE_ADMIN);
//
//        usuarioRepository.save(usuario);
//        usuarioRepository.save(usuarioAdmin);
//    }
//}