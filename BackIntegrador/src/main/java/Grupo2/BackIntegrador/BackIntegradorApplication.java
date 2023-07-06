package Grupo2.BackIntegrador;

import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.Roles;
import Grupo2.BackIntegrador.repository.CategoriaRepository;
import Grupo2.BackIntegrador.repository.RolesRepository;
import Grupo2.BackIntegrador.repository.UsuarioRepository;
import Grupo2.BackIntegrador.service.CaracteristicaService;
import Grupo2.BackIntegrador.service.CategoriaService;
import Grupo2.BackIntegrador.service.ProductoService;
import Grupo2.BackIntegrador.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class BackIntegradorApplication {


	public static void main(String[] args) {
		SpringApplication.run(BackIntegradorApplication.class, args);
	}

	@Bean
	public CommandLineRunner loadRoles(RolesRepository rolesRepository){
		return args -> {
			if (rolesRepository.findAll().isEmpty()) {
				Roles user = Roles.builder().name("ROLE_USER").build();
				rolesRepository.save(user);
				Roles admin = Roles.builder().name("ROLE_ADMIN").build();
				rolesRepository.save(admin);
			}
		};
	}

	@Bean
	public CommandLineRunner loadInitialData(CaracteristicaService caracteristicaService, CategoriaService categoriaService, ProductoService productoService, UbicacionService ubicacionService){
		return args -> {
			if (productoService.listarProducto().isEmpty()){
				categoriaService.guardarCategoria(Categoria.builder().titulo("Economico").url_imagen("https://www.lavoz.com.ar/resizer/SOb5uC25IO5HJwNTWsBZT6Qk3Qs=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/OILWIHG4GFHDDKY73BOUVXDOU4.jpg")
						.descripcion("Disfrutarás de la libertad de movilidad sin comprometerte financieramente. Al optar por un auto económico, podrás ahorrar dinero en combustible y gastos de mantenimiento, permitiéndote destinar esos recursos a otras actividades durante tu viaje.").build());

				categoriaService.guardarCategoria(Categoria.builder().titulo("Gama-media").url_imagen("https://autoxarg.com.ar/wp-content/uploads/2022/06/Ventas-0km-Argentina-04.jpg")
						.descripcion("Nuestro servicio de alquiler de autos de gama media te ofrece una experiencia de conducción excepcional a un precio asequible. Con nuestra amplia selección de autos de calidad y rendimiento superior, podrás disfrutar de todas las comodidades y prestaciones que deseas en un vehículo, sin comprometer tu presupuesto.").build());

				categoriaService.guardarCategoria(Categoria.builder().titulo("").url_imagen("")
						.descripcion("").build());

				categoriaService.guardarCategoria(Categoria.builder().titulo("Premium").url_imagen("")
						.descripcion("").build());

			}
		};
	}


}
