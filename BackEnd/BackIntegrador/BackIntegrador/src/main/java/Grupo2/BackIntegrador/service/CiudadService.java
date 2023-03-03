package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Ciudad;
import Grupo2.BackIntegrador.repository.CiudadRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {

    private CiudadRepository ciudadRepository;
    private static final Logger LOGGER=Logger.getLogger(CiudadService.class);
    @Autowired
    public CiudadService(CiudadRepository ciudadRepository) {

        this.ciudadRepository = ciudadRepository;
    }

    public List<Ciudad> listarCiudad() {
        LOGGER.info("Se inició el listado de todas las ciudad");
        return ciudadRepository.findAll();
    }

    public Ciudad guardarCiudad(Ciudad ciudad){
        LOGGER.info("Se inició una operación de guardado de la ciudad con id=: "+
                ciudad.getId());
        return ciudadRepository.save(ciudad);
    }

    public void actualizarCiudad(Ciudad ciudad){
        LOGGER.info("Se inició una operación de actualización de la ciudad con id="+
                ciudad.getId());
        ciudadRepository.save(ciudad);
    }

    public void eliminarCiudad(Long id) throws ResourceNotFoundException {
        Optional<Ciudad> CiudadAEliminar=buscarCiudadXId(id);
        if (CiudadAEliminar.isPresent()){
            ciudadRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la ciudad con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La ciudad a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Ciudad> buscarCiudadXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la ciudad con id="+id);
        return ciudadRepository.findById(id);
    }
}
