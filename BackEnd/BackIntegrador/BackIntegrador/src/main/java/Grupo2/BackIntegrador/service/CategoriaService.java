package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.repository.CategoriaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    private CategoriaRepository categoriaRepository;
    private static final Logger LOGGER=Logger.getLogger(CategoriaService.class);
    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository) {

        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> listarCategorias() {
        LOGGER.info("Se inició el listado de todas las Categorias");
        return categoriaRepository.findAll();
    }

    public Categoria guardarCategoria(Categoria categoria){
        LOGGER.info("Se inició una operación de guardado de la categoria con titulo: "+
                categoria.getTitulo());
        return categoriaRepository.save(categoria);
    }

    public void actualizarCategoria(Categoria categoria){
        LOGGER.info("Se inició una operación de actualización de la categoria con id="+
                categoria.getId());
        categoriaRepository.save(categoria);
    }

    public void eliminarCategoria(Long id) throws ResourceNotFoundException {
        Optional<Categoria> categoriaAEliminar=buscarCategoriaXId(id);
        if (categoriaAEliminar.isPresent()){
            categoriaRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la categoria con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La categoria a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Categoria> buscarCategoriaXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la categoria con id="+id);
        return categoriaRepository.findById(id);
    }
}
