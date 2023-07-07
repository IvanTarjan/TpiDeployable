package Grupo2.BackIntegrador;

import Grupo2.BackIntegrador.model.*;
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

import java.util.Set;


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
				Categoria economico = categoriaService.guardarCategoria(Categoria.builder().titulo("Economico").url_imagen("https://www.lavoz.com.ar/resizer/SOb5uC25IO5HJwNTWsBZT6Qk3Qs=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/OILWIHG4GFHDDKY73BOUVXDOU4.jpg")
						.descripcion("Disfrutarás de la libertad de movilidad sin comprometerte financieramente. Al optar por un auto económico, podrás ahorrar dinero en combustible y gastos de mantenimiento, permitiéndote destinar esos recursos a otras actividades durante tu viaje.").build());

				Categoria gamaMedia = categoriaService.guardarCategoria(Categoria.builder().titulo("Gama-media").url_imagen("https://autoxarg.com.ar/wp-content/uploads/2022/06/Ventas-0km-Argentina-04.jpg")
						.descripcion("Nuestro servicio de alquiler de autos de gama media te ofrece una experiencia de conducción excepcional a un precio asequible. Con nuestra amplia selección de autos de calidad y rendimiento superior, podrás disfrutar de todas las comodidades y prestaciones que deseas en un vehículo, sin comprometer tu presupuesto.").build());

				Categoria premium = categoriaService.guardarCategoria(Categoria.builder().titulo("Premium").url_imagen("https://fotos.perfil.com/2022/02/02/los-10-autos-mas-caros-1307728.jpg")
						.descripcion("Nuestro exclusivo servicio de alquiler de autos de categoría premium te sumergirá en un mundo de lujo y refinamiento. Disponemos de una selecta flota de vehículos de prestigio que combina diseño elegante, tecnología de vanguardia y un rendimiento excepcional.").build());

				Categoria pickUp = categoriaService.guardarCategoria(Categoria.builder().titulo("PickUp").url_imagen("https://dossierweb.com.ar/wp-content/uploads/2023/04/pickup.png")
						.descripcion("Nuestro apasionante servicio de alquiler de camionetas pick-up te invita a vivir la aventura al máximo. Con nuestras robustas y versátiles camionetas, estarás preparado para conquistar cualquier terreno y emprender emocionantes travesías.").build());

				Ubicacion bariloche = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("San Carlos De Bariloche").build());

				Ubicacion caba = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Ciudad Autonoma de Buenos Aires").build());

				Ubicacion mendoza = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Mendoza").build());

				Ubicacion cordoba = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Cordoba").build());

				Ubicacion salta = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Salta").build());

				Ubicacion ushaia = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Ushuaia").build());

				Ubicacion puertoMadrin = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("Puerto Madrin").build());

				Ubicacion losAndes = ubicacionService.guardarUbicacion(Ubicacion.builder().pais("Argentina").nombre("San Martin de los Andes").build());

				Caracteristica manual = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Manual").icono("https://www.svgrepo.com/show/237062/gearshift.svg").build());

				Caracteristica automatico = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Automatico").icono("https://www.svgrepo.com/show/232199/gearshift-shift.svg").build());

				Caracteristica aireAcondicionado = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Aire Acondicionado").icono("https://www.svgrepo.com/show/454855/cold-snowflake.svg").build());

				Caracteristica cuatroPuertas = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("4 puertas").icono("https://www.svgrepo.com/show/459195/car-door-left-1.svg").build());

				Caracteristica dosPuertas = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("2 puertas").icono("https://www.svgrepo.com/show/459195/car-door-left-1.svg").build());

				Caracteristica traccionSimple = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Tracción Simple").icono("https://www.svgrepo.com/show/477522/tire.svg").build());

				Caracteristica dobleTraccion = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Doble Tracción").icono("https://www.svgrepo.com/show/17093/truck-wheel.svg").build());

				Caracteristica baulGrande = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Baúl Grande").icono("https://www.svgrepo.com/show/425263/suitcase.svg").build());

				Caracteristica baulChico = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Baúl Chico").icono("https://www.svgrepo.com/show/425106/suitcase-briefcase-bag.svg").build());

				Caracteristica frenosAbs = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Frenos con ABS").icono("https://www.svgrepo.com/show/198281/breaks-car.svg").build());

				Caracteristica nafta = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Nafta").icono("https://www.svgrepo.com/show/339221/fuel.svg").build());

				Caracteristica diesel = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Diésel").icono("https://www.svgrepo.com/show/339221/fuel.svg").build());

				Caracteristica dosAirbags = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("2 Airbags").icono("https://www.svgrepo.com/show/2349/airbag.svg").build());

				Caracteristica cuatroAirbags = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("4 Airbags").icono("https://www.svgrepo.com/show/2349/airbag.svg").build());

				Politica devolucion = Politica.builder().titulo("Devolución").descripcion("Con combustible \n Limpio \n Antes de las 12.").build();

				Politica entrega = Politica.builder().titulo("Entrega").descripcion("Llegar 30 minutos antes para verificar documentacion. \n Con combustible.").build();

				Politica uso = Politica.builder().titulo("Uso").descripcion("No comer en el auto. \n Maximo 300km por dia.").build();

				Set<Politica> politicas = Set.of(devolucion, entrega, uso);



				Producto chevroletClassic = productoService.guardarProducto(Producto.builder().titulo("Chevrolet Corsa Classic").categoria(economico).precio(15000L)
						.ubicacion(bariloche).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual))
						.politica(politicas).latitud(-41.137340F).longitud(-71.307615F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://upload.wikimedia.org/wikipedia/commons/3/3f/Classic_LT2.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://autotest.com.ar/wp-content/uploads/2022/05/Chevrolet-Classic-Interior-Nuevo.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://2.bp.blogspot.com/_RjqSXG-IQ6M/TBZQ6U60FuI/AAAAAAAAPcM/7OtIB99fk68/s1600/CLASSIC2.JPG").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://farm4.staticflickr.com/3909/14577234496_c3c47a0875_k.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.compraensanjuan.com/fotos_vehiculos/1751362_1.jpg").build()
										))
						.descripcion("El Chevrolet Corsa Classic es un automóvil compacto diseñado para adaptarse a todas tus necesidades de transporte. Con un estilo clásico y elegante, este vehículo es perfecto tanto para viajes de negocios como para escapadas de fin de semana.\n" +
								"\n" +
								"El interior del Corsa Classic está cuidadosamente diseñado para ofrecerte comodidad y practicidad. Con asientos ergonómicos y ajustables, disfrutarás de un viaje suave y relajante, incluso en trayectos largos. Además, cuenta con un amplio espacio de carga, lo que lo convierte en la elección ideal para aquellos que necesitan transportar equipaje o realizar compras durante su viaje.\n" +
								"\n" +
								"En cuanto a su rendimiento, el Corsa Classic está equipado con un motor eficiente y económico, que te permitirá recorrer largas distancias sin preocuparte por el consumo de combustible. Además, su dirección precisa y su suspensión equilibrada garantizan un manejo ágil y estable en todo momento.").build());
			}
		};
	}


}
