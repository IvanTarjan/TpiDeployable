package Grupo2.BackIntegrador.repository;
import Grupo2.BackIntegrador.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    Optional<Usuario> findByuserNameOrEmail(String userName, String email);

    Optional<Usuario> findByuserName(String userName);

    Boolean existsByuserName(String userName);

    Boolean existsByEmail(String email);

    @Modifying
    @Transactional
    @Query(nativeQuery = true, value = "UPDATE usuario u SET u.verificado = 1 where u.user_name = ?")
    void verifyUser(String username);
}