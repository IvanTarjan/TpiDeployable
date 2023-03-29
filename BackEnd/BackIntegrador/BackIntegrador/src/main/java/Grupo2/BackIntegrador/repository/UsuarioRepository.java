package Grupo2.BackIntegrador.repository;
import Grupo2.BackIntegrador.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByuserNameOrEmail(String userName, String email);

    Optional<Usuario> findByuserName(String userName);

    Boolean existsByuserName(String userName);

    Boolean existsByEmail(String email);
}