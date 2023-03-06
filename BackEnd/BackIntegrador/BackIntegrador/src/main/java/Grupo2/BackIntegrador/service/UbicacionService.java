package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Ubicacion;
import Grupo2.BackIntegrador.repository.UbicacionRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UbicacionService {

    private UbicacionRepository ubicacionRepository;
    private static final Logger LOGGER=Logger.getLogger(UbicacionService.class);
    @Autowired
    public UbicacionService(UbicacionRepository ubicacionRepository) {

        this.ubicacionRepository = ubicacionRepository;
    }

    public List<Ubicacion> listarUbicacion() {
        LOGGER.info("Se inició el listado de todas las ubicacion");
        return ubicacionRepository.findAll();
    }

    public Ubicacion guardarUbicacion(Ubicacion ubicacion){
        LOGGER.info("Se inició una operación de guardado de la ciudad con id=: "+
                ubicacion.getId());
        return ubicacionRepository.save(ubicacion);
    }

    public void actualizarUbicacion(Ubicacion ubicacion){
        LOGGER.info("Se inició una operación de actualización de la ciudad con id="+
                ubicacion.getId());
        ubicacionRepository.save(ubicacion);
    }

    public void eliminarUbicacion(Long id) throws ResourceNotFoundException {
        Optional<Ubicacion> ubicacionAEliminar=buscarUbicacionXId(id);
        if (ubicacionAEliminar.isPresent()){
            ubicacionRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la ubicacion con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La ubicacion a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Ubicacion> buscarUbicacionXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la ubicacion con id="+id);
        return ubicacionRepository.findById(id);
    }
}
