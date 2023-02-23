import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../commons/CategoryCard'
import colors from '../commons/colors'

const CategoryContainer = ({cars}) => {

    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
      axios.get("http://localhost:5000/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.log(err))
    }, [])

    const filterByCategoriaNombre = (nombre) => cars.filter(car=> car.category == nombre).map((carImg) => carImg.image);

  return (
    <Box display={"flex"} flexDirection="column" margin={"15px 0px"} justifyContent="center" alignItems="center">
        <Typography variant='h3'display={"flex"} alignSelf={'flex-start'} fontSize="24px" fontWeight={600} color={colors.c3}>Buscar por tipo de vehiculo</Typography>
        <Box display={"flex"} flexDirection={{xs: "column", sm:"row"}} gap={"15px"} justifyContent="center" alignItems={'center'} width='100%' flexWrap={"wrap"}>
            {categorias.map(categoria => (
              <CategoryCard key={categoria.id} categoria={categoria} carImgs={filterByCategoriaNombre(categoria.nombre)}/>
            ))}
        </Box>
    </Box>
  )
}

export default CategoryContainer