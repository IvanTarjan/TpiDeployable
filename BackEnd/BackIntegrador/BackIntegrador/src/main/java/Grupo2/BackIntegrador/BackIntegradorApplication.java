package Grupo2.BackIntegrador;

import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.repository.CategoriaRepository;
import Grupo2.BackIntegrador.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BackIntegradorApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackIntegradorApplication.class, args);

	}


}
