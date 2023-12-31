package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.exception.ResourceNotFoundException;

import Grupo2.BackIntegrador.model.Politica;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.repository.PoliticaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

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

    public void actualizarPolitica(Politica politica) throws ResourceNotFoundException {
        Optional<Politica> politicaAActualizar = buscarPoliticaXId(politica.getId());
        if (politicaAActualizar.isPresent()){
            LOGGER.info("Se inició una operación de actualización de la politica con id ="+ politica.getId());
            politicaRepository.save(politica);
        } else {
            throw new ResourceNotFoundException("No se actualizo la politica con id = "+politica.getId()+ " porque no se encontro en la base de datos");
        }

    }

    public void eliminarPolitica(Long id) throws ResourceNotFoundException {
        Optional<Politica> politicaAEliminar=buscarPoliticaXId(id);
        if (politicaAEliminar.isPresent()){
            politicaAEliminar.get().getProducto().removePolitica(politicaAEliminar.get());
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

    public void guardarPoliticas (Set<Politica> politicaSet, Producto producto){
        if (politicaSet == null) return;
        for (Politica politica : politicaSet) {
            politica.setProducto(producto);
            politicaRepository.save(politica);
        }
    }
}