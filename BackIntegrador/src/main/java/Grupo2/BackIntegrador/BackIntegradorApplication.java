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

				Caracteristica bluetooth = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Bluetooth").icono("https://www.svgrepo.com/show/523194/bluetooth.svg").build());


				Caracteristica diesel = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("Diésel").icono("https://www.svgrepo.com/show/339221/fuel.svg").build());

				Caracteristica dosAirbags = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("2 Airbags").icono("https://www.svgrepo.com/show/2349/airbag.svg").build());

				Caracteristica cuatroAirbags = caracteristicaService.guardarCaracteristica(Caracteristica.builder().titulo("4 Airbags").icono("https://www.svgrepo.com/show/2349/airbag.svg").build());

				Politica devolucion = Politica.builder().titulo("Devolución").descripcion("Con combustible \n Limpio \n Antes de las 12.").build();

				Politica entrega = Politica.builder().titulo("Entrega").descripcion("Llegar 30 minutos antes para verificar documentacion. \n Con combustible.").build();

				Politica uso = Politica.builder().titulo("Uso").descripcion("No comer en el auto. \n Maximo 300km por dia.").build();

				Set<Politica> politicas = Set.of(devolucion, entrega, uso);



				Producto chevroletClassic = productoService.guardarProducto(Producto.builder().titulo("Chevrolet Corsa Classic").categoria(economico).precio(15000L)
						.ubicacion(cordoba).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual))
						.politica(politicas).latitud(-41.137340F).longitud(-71.307615F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://upload.wikimedia.org/wikipedia/commons/3/3f/Classic_LT2.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://autotest.com.ar/wp-content/uploads/2022/05/Chevrolet-Classic-Interior-Nuevo.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://2.bp.blogspot.com/_RjqSXG-IQ6M/TBZQ6U60FuI/AAAAAAAAPcM/7OtIB99fk68/s1600/CLASSIC2.JPG").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://farm4.staticflickr.com/3909/14577234496_c3c47a0875_k.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://www.compraensanjuan.com/fotos_vehiculos/1751362_1.jpg").build()
										))
						.descripcion("El Chevrolet Corsa Classic es un automóvil compacto diseñado para adaptarse a todas tus necesidades de transporte. Con un estilo clásico y elegante, este vehículo es perfecto tanto para viajes de negocios como para escapadas de fin de semana.\n" +
								"\n" +
								"El interior del Corsa Classic está cuidadosamente diseñado para ofrecerte comodidad y practicidad. Con asientos ergonómicos y ajustables, disfrutarás de un viaje suave y relajante, incluso en trayectos largos. Además, cuenta con un amplio espacio de carga, lo que lo convierte en la elección ideal para aquellos que necesitan transportar equipaje o realizar compras durante su viaje.\n" +
								"\n" +
								"En cuanto a su rendimiento, el Corsa Classic está equipado con un motor eficiente y económico, que te permitirá recorrer largas distancias sin preocuparte por el consumo de combustible. Además, su dirección precisa y su suspensión equilibrada garantizan un manejo ágil y estable en todo momento.").build());


				Producto fordKa = productoService.guardarProducto(Producto.builder().titulo("Ford Ka").categoria(economico).precio(14000L)
						.ubicacion(mendoza).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulChico, nafta, dosAirbags, manual))
						.politica(politicas).latitud(-32.885342F).longitud(-68.843472F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://upload.wikimedia.org/wikipedia/commons/0/00/2018_Ford_KA%2B_Zetec_1.0_Front.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://www.megautos.com/wp-content/uploads/2018/05/Ford-Ka-Freestyle-interior.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://d171xgro1r36rb.cloudfront.net/1YbYhcVS_w1VZNOIAapcbBLQgjLluwZyP.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.megautos.com/wp-content/uploads/2017/02/Ford-Ka-mas-baul-1024x768.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://www.megautos.com/wp-content/uploads/2017/03/Ford-Ka-Trail-lateral-1024x669.jpg").build()
								))
						.descripcion("El Ford Ka es perfecto para aquellos que buscan un automóvil ágil y fácil de maniobrar en entornos urbanos. Su diseño moderno y aerodinámico no solo le otorga una apariencia elegante, sino que también mejora su eficiencia en el consumo de combustible.\n" +
								"\n" +
								"Con su tamaño compacto, el Ford Ka es ideal para desplazarte por las calles estrechas de la ciudad y encontrar fácilmente estacionamiento. A pesar de su tamaño, el interior del Ka ofrece un espacio sorprendentemente amplio, brindando comodidad tanto para el conductor como para los pasajeros.\n" +
								"\n" +
								"El Ford Ka cuenta con tecnología y características innovadoras para hacer que cada viaje sea cómodo y agradable. Desde su sistema de infoentretenimiento con pantalla táctil y conectividad Bluetooth hasta su sistema de control de crucero, el Ka está equipado para satisfacer tus necesidades tecnológicas mientras conduces.").build());

				Producto volkswagenFox = productoService.guardarProducto(Producto.builder().titulo("Volkswagen Crossfox").categoria(economico).precio(14000L)
						.ubicacion(salta).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulChico, nafta, dosAirbags, manual, frenosAbs))
						.politica(politicas).latitud(-24.794860F).longitud(-65.428259F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://acnews.blob.core.windows.net/imgnews/large/NAZ_a1b641a28e37452887bfd645eefd9a27.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://www.megautos.com/wp-content/uploads/2016/09/VW-Fox-highline-interior-1024x575.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://www.megautos.com/wp-content/uploads/2016/09/VW-Fox-Pepper-trasera.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://farm9.staticflickr.com/8568/16345265425_d09b258432_k.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://i.ytimg.com/vi/apqrg8yNyhE/maxresdefault.jpg").build()
								))
						.descripcion("El Volkswagen Crossfox es un automóvil compacto que combina la practicidad de un hatchback con la robustez de un crossover. Su diseño distintivo y deportivo, con líneas audaces y detalles resistentes, le brinda una apariencia única que se destaca en la carretera.\n" +
								"\n" +
								"Este vehículo está diseñado para enfrentar diversos terrenos y condiciones de manejo. Con una altura elevada y un sistema de tracción integral, el Crossfox te permite aventurarte fuera de la ciudad y disfrutar de experiencias todo terreno con confianza. Ya sea en caminos irregulares o en condiciones climáticas desafiantes, este vehículo te brinda estabilidad y seguridad en cada trayecto.").build());

				Producto peugeot207 = productoService.guardarProducto(Producto.builder().titulo("Peugeot 207").categoria(economico).precio(12000L)
						.ubicacion(caba).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulChico, nafta, dosAirbags, manual, bluetooth))
						.politica(politicas).latitud(-34.589347F).longitud(-58.426827F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://cdn.motor1.com/images/mgl/my4w4/s1/4x3/adios-al-peugeot-207-compact.webp").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://www.megautos.com/wp-content/uploads/2016/07/Peugeot-207-Compact-interior-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://www.megautos.com/wp-content/uploads/2016/07/Peugeot-207-Compact-5p-trasera-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.carsmagazine.com.ar/wp-content/uploads/2009/11/peugeot-207-compact-sedan-31.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://autotest.com.ar/wp-content/uploads/2021/07/CHEVROLET-207-PERFIL.jpg").build()
								))
						.descripcion("El Peugeot 207 es un automóvil versátil que se adapta tanto a tus necesidades urbanas como a tus aventuras en carretera. Con su diseño aerodinámico y líneas suaves, este vehículo destaca por su apariencia moderna y sofisticada.\n" +
								"\n" +
								"El interior del Peugeot 207 ha sido diseñado para brindarte una experiencia de conducción cómoda y agradable. Con asientos ergonómicos y espaciosos, disfrutarás de un viaje placentero tanto para el conductor como para los pasajeros. Además, cuenta con una variedad de características convenientes, como un sistema de infoentretenimiento con pantalla táctil, conectividad Bluetooth y volante multifunción, que te permiten controlar tus dispositivos y acceder a la información que necesitas mientras estás en movimiento.").build());

				Producto nissanMarch = productoService.guardarProducto(Producto.builder().titulo("Nissan March").categoria(economico).precio(13500L)
						.ubicacion(ushaia).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs,bluetooth))
						.politica(politicas).latitud(-54.819789F).longitud(-68.327874F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://cdn.motor1.com/images/mgl/0M9y9/s1/adios-al-nissan-march.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://i0.wp.com/www.mundoautomotor.com.ar/web/wp-content/uploads/2014/03/Nissan-March-2014-3.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://fotos.perfil.com/2012/05/01/nissan-march-atras.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://cdn.motor1.com/images/mgl/WVMnr/s3/critica-nissan-march-active.webp").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://hiramnoriega.com/wp-content/uploads/2020/12/324324432432423.jpg").build()
								))
						.descripcion("El Nissan March es un automóvil urbano diseñado para adaptarse a la vida en la ciudad. Con su tamaño compacto y su capacidad de maniobra, es perfecto para desplazarte fácilmente por calles congestionadas y encontrar estacionamiento sin problemas.\n" +
								"\n" +
								"A pesar de su tamaño, el Nissan March ofrece un interior sorprendentemente espacioso y cómodo. Con asientos bien diseñados y ajustables, disfrutarás de una experiencia de conducción placentera tanto para el conductor como para los pasajeros. Además, cuenta con suficiente espacio de carga para tus pertenencias o compras durante el viaje.").build());

				Producto fiatPalio = productoService.guardarProducto(Producto.builder().titulo("Fiat Palio").categoria(economico).precio(10500L)
						.ubicacion(bariloche).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulChico, nafta, dosAirbags, manual, frenosAbs))
						.politica(politicas).latitud(-41.136397F).longitud(-71.308539F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://upload.wikimedia.org/wikipedia/commons/7/7e/Fiat_Palio_white_5door.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://autotest.com.ar/wp-content/uploads/2022/12/Fiat-Palio-interior.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://imagenes.cordobavende.com/6863483bbc922b780ddbc84c5b2fcae9.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.compraensanjuan.com/fotos_vehiculos/2034445_8.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://w0.peakpx.com/wallpaper/540/19/HD-wallpaper-2012-fiat-palio-side-car.jpg").build()
								))
						.descripcion("El Fiat Palio es un automóvil compacto diseñado para adaptarse a diferentes necesidades de conducción. Con su diseño aerodinámico y líneas elegantes, este vehículo destaca por su estilo moderno y atractivo.\n" +
								"\n" +
								"En el interior, el Fiat Palio ofrece un espacio amplio y cómodo para todos los ocupantes. Sus asientos ergonómicos brindan un apoyo adecuado durante los viajes, mientras que su diseño inteligente maximiza el espacio disponible. Además, cuenta con un sistema de climatización eficiente, lo que garantiza una temperatura agradable en el habitáculo en todo momento").build());

				Producto relaultLogan = productoService.guardarProducto(Producto.builder().titulo("Fiat Palio").categoria(gamaMedia).precio(16800L)
						.ubicacion(puertoMadrin).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs))
						.politica(politicas).latitud(-42.763615F).longitud(-65.043935F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://cdn.motor1.com/images/mgl/e2jKK/s3/critica-renault-logan-cvt.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://www.megautos.com/wp-content/uploads/2019/11/nuevo-renault-logan-interior-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://www.elcarrocolombiano.com/wp-content/uploads/2020/02/20200309-RENAULT-LOGAN-INTENS-CVT-PRUEBA-DE-MANEJO-COLOMBIA-VIDEO-03.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.megautos.com/wp-content/uploads/2020/09/Nuevo-Logan-2020-baul-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://tuautoencasa.com/img/galeria/1619215248.jpg").build()
								))
						.descripcion("El Renault Logan es un automóvil sedán diseñado para brindarte un espacio generoso y cómodo tanto para los pasajeros como para el equipaje. Con su diseño aerodinámico y líneas elegantes, el Logan destaca por su aspecto moderno y atractivo.\n" +
								"\n" +
								"En el interior, el Renault Logan ofrece un amplio espacio para que todos los ocupantes se sientan cómodos durante el viaje. Sus asientos ergonómicos brindan un soporte adecuado y su diseño inteligente optimiza el espacio disponible. Además, cuenta con un maletero espacioso, lo que lo convierte en una opción ideal para aquellos que necesitan transportar equipaje o realizar compras durante su viaje.").build());

				Producto fiatCronos = productoService.guardarProducto(Producto.builder().titulo("Fiat Cronos").categoria(gamaMedia).precio(17000L)
						.ubicacion(losAndes).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs))
						.politica(politicas).latitud(-40.136765F).longitud(-71.293497F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://autotest.com.ar/wp-content/uploads/2021/07/FIAT-CRONOS-SDESIGN-2022.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://cdn.motor1.com/images/mgl/GLXVE/s1/4x3/fiat-mostro-el-interior-del-cronos-argentino-todas-las-fotos.webp").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://www.megautos.com/wp-content/uploads/2019/05/Fiat-Cronos-Centenario-atras-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.megautos.com/wp-content/uploads/2020/11/Fiat-Cronos-2021-baul-1024x669.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://www.megautos.com/wp-content/uploads/2019/05/Fiat-Cronos-Centenario-lateral-1024x669.jpg").build()
								))
						.descripcion("El Fiat Cronos es un sedán compacto diseñado con líneas elegantes y modernas que destacan su personalidad distintiva en la carretera. Su diseño aerodinámico y deportivo no solo agrega atractivo visual, sino que también contribuye a la eficiencia en el consumo de combustible.\n" +
								"\n" +
								"Al entrar al Fiat Cronos, descubrirás un interior espacioso y confortable, diseñado pensando en tus necesidades y comodidad. Los asientos ergonómicos ofrecen un excelente soporte, incluso en viajes largos, y los materiales de alta calidad y los acabados cuidadosamente seleccionados realzan la sensación de lujo.").build());

				Producto ecosport = productoService.guardarProducto(Producto.builder().titulo("Ford Ecosport").categoria(gamaMedia).precio(15000L)
						.ubicacion(bariloche).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs))
						.politica(politicas).latitud(-41.136397F).longitud(-71.308539F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://cdn.motor1.com/images/mgl/MB2En/s3/la-carta-que-envio-ford-argentina-a-quienes-recibiran-la-ecosport-importada-de-india.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/09/ford-ecosport-2018_4.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://carnovo.com/wp-content/uploads/2018/08/Trasera-del-Ford-EcoSport-2018.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://fotos.perfil.com/2019/05/03/test-comparativo-citroen-c4-cactus-ford-ecosport-storm-prueba-de-manejo-687050.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://fotos.perfil.com/2012/10/01/trim/1280/720/nueva-ecosport-lateral.jpg").build()
								))
						.descripcion("El Ford Ecosport es el compañero perfecto para tus aventuras en la ciudad y más allá. Con un diseño moderno y robusto, este SUV compacto ofrece una apariencia atractiva y deportiva que seguramente llamará la atención en cualquier lugar al que vayas.\n" +
								"\n" +
								"Este vehículo está equipado con un potente motor que ofrece un rendimiento excepcional y una conducción suave. Ya sea que estés conduciendo por calles urbanas o explorando carreteras sinuosas, el Ford Ecosport te brindará una experiencia de conducción ágil y emocionante.\n" +
								"\n" +
								"El interior del Ford Ecosport es espacioso y cómodo, lo que lo convierte en una excelente opción para familias, amigos o cualquier persona que desee disfrutar de un viaje relajante. El amplio espacio para las piernas y los asientos ajustables garantizan que todos los ocupantes tengan un viaje confortable, sin importar la duración del trayecto.").build());

				Producto renaultStepway = productoService.guardarProducto(Producto.builder().titulo("Renault Sandero Stepway").categoria(gamaMedia).precio(15300L)
						.ubicacion(mendoza).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs, bluetooth))
						.politica(politicas).latitud(-32.885342F).longitud(-68.843472F).imagen(
								Set.of(Imagen.builder().titulo("Vista General").url_img("https://autotest.com.ar/wp-content/uploads/2022/05/Renault-Sandero-Stepway-render-frente.jpg").build(),
										Imagen.builder().titulo("Vista Interior").url_img("https://www.autoweb.com.ar/wp-content/uploads/2019/11/Plancha-BAJA.jpg").build(),
										Imagen.builder().titulo("Vista desde Atras").url_img("https://www.megautos.com/wp-content/uploads/2022/10/renault-stepway-zen-1-atras.jpg").build(),
										Imagen.builder().titulo("Vista del Baúl").url_img("https://www.megautos.com/wp-content/uploads/2020/09/Nuevo-Sandero-Stepway-2020-baul.jpg").build(),
										Imagen.builder().titulo("Vista lateral").url_img("https://www.megautos.com/wp-content/uploads/2018/09/renault-sandero-stepway-volcom-lateral.jpg").build()
								))
						.descripcion("").build());

//				Producto placeHolder = productoService.guardarProducto(Producto.builder().titulo("").categoria(gamaMedia).precio(15000L)
//						.ubicacion(bariloche).caracteristica(Set.of(cuatroPuertas,traccionSimple, aireAcondicionado,baulGrande, nafta, dosAirbags, manual, frenosAbs))
//						.politica(politicas).latitud(-41.136397F).longitud(-71.308539F).imagen(
//								Set.of(Imagen.builder().titulo("Vista General").url_img("").build(),
//										Imagen.builder().titulo("Vista Interior").url_img("").build(),
//										Imagen.builder().titulo("Vista desde Atras").url_img("").build(),
//										Imagen.builder().titulo("Vista del Baúl").url_img("").build(),
//										Imagen.builder().titulo("Vista lateral").url_img("").build()
//								))
//						.descripcion("").build());
			}


		};
	}


}
