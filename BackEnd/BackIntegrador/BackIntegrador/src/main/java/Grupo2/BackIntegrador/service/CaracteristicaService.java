package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Caracteristica;
import Grupo2.BackIntegrador.repository.CaracteristicaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {

    private CaracteristicaRepository caracteristicaRepository;
    private static final Logger LOGGER=Logger.getLogger(CaracteristicaService.class);
    @Autowired
    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository) {

        this.caracteristicaRepository = caracteristicaRepository;
    }

    public List<Caracteristica> listarCaracteristica() {
        LOGGER.info("Se inició el listado de todas las Caracteristicas");
        return caracteristicaRepository.findAll();
    }

    public Caracteristica guardarCaracteristica(Caracteristica caracteristica){
        LOGGER.info("Se inició una operación de guardado de la Caracteristicas con titulo: "+
                caracteristica.getTitulo());
        return caracteristicaRepository.save(caracteristica);
    }

    public void actualizarCaracteristica(Caracteristica caracteristica){
        LOGGER.info("Se inició una operación de actualización de la Caracteristica con id="+
                caracteristica.getId());
        caracteristicaRepository.save(caracteristica);
    }

    public void eliminarCaracteristica(Long id) throws ResourceNotFoundException {
        Optional<Caracteristica> caracteristicaAEliminar=buscarCaracteristicaXId(id);
        if (caracteristicaAEliminar.isPresent()){
            caracteristicaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la Caracteristica con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La Caracteristica a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Caracteristica> buscarCaracteristicaXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la Caracteristica con id="+id);
        return caracteristicaRepository.findById(id);
    }
}