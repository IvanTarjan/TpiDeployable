package Grupo2.BackIntegrador.service;

import Grupo2.BackIntegrador.Exception.ResourceNotFoundException;
import Grupo2.BackIntegrador.model.Categoria;
import Grupo2.BackIntegrador.model.Imagen;
import Grupo2.BackIntegrador.model.Producto;
import Grupo2.BackIntegrador.repository.CategoriaRepository;
import Grupo2.BackIntegrador.repository.ImagenRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ImagenService {

    private ImagenRepository imagenRepository;
    private static final Logger LOGGER=Logger.getLogger(ImagenService.class);
    @Autowired
    public ImagenService(ImagenRepository imagenRepository) {

        this.imagenRepository = imagenRepository;
    }

    public List<Imagen> listarimagenes() {
        LOGGER.info("Se inició el listado de todas las imagenes");
        return imagenRepository.findAll();
    }

    public Imagen guardarImagen(Imagen imagen){
        LOGGER.info("Se inició una operación de guardado de la imagen con titulo: "+
                imagen.getTitulo());
        return imagenRepository.save(imagen);
    }

    public void actualizarImagen(Imagen imagen){
        LOGGER.info("Se inició una operación de actualización de la imagen con id="+
                imagen.getId());
        imagenRepository.save(imagen);
    }

    public void eliminarImagen(Long id) throws ResourceNotFoundException {
        Optional<Imagen> imagenAEliminar=buscarImagenXId(id);
        if (imagenAEliminar.isPresent()){
            imagenRepository.deleteById(id);
            LOGGER.warn("Se realizo una operación de eliminación de la imagen con" +
                    "id="+id);
        }
        else{
            throw new ResourceNotFoundException("La imagen a eliminar no existe" +
                    " en la base de datos, se intentó encontrar sin éxito en id= "+id);
        }

    }

    public Optional<Imagen> buscarImagenXId(Long id){
        LOGGER.info("Se inició una operación de búsqueda de la imagen con id="+id);
        return imagenRepository.findById(id);
    }

    public void guardarImagenes(Set<Imagen> imagenSet, Producto producto){
        if (imagenSet == null) return;
        for (Imagen imagen : imagenSet) {
            imagen.setProducto(producto);
            imagenRepository.save(imagen);
        }
    }
}