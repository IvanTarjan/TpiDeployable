package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;

import Grupo2.BackIntegrador.model.Politica;
import Grupo2.BackIntegrador.repository.PoliticaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PoliticaService {

    private PoliticaRepository politicaRepository;
    private static final Logger LOGGER=Logger.getLogger(PoliticaService.class);
    @Autowired
    public PoliticaService(PoliticaRepository politicaRepository) {

        this.politicaRepository = politicaRepository;
    }

    public List<Politica> listarPoliticas() {
        LOGGER.info("Se inició el listado de todas las Politicas");
        return politicaRepository.findAll();
    }

    public Politica guardarPolitica(Politica politica){
        LOGGER.info("Se inició una operación de guardado de la politica con titulo: "+
                politica.getTitulo());
        return politicaRepository.save(politica);
    }

    public void actualizarPolitica(Politica politica){
        LOGGER.info("Se inició una operación de actualización de la politica con id="+
                politica.getId());
        politicaRepository.save(politica);
    }

    public void eliminarPolitica(Long id) throws ResourceNotFoundException {
        Optional<Politica> politicaAEliminar=buscarPoliticaXId(id);
        if (politicaAEliminar.isPresent()){
            politicaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la politica con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La politica a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Politica> buscarPoliticaXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la politica con id="+id);
        return politicaRepository.findById(id);
    }
}