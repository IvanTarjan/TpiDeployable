import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../commons/CategoryCard'
import colors from '../commons/colors'

const CategoryContainer = () => {

    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
      const axiosTemp = [{id: 1, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 2, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 3, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 4, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}];
      setCategorias(axiosTemp)
    }, [])
    

  return (
    <Box display={"flex"} flexDirection="column" margin={"15px 0px"} justifyContent="center" alignItems="center" padding={"0px 4%"}>
        <Typography variant='h3'display={"flex"} alignSelf={'flex-start'} fontSize="24px" fontWeight={600} color={colors.c3}>Buscar por tipo de vehiculo</Typography>
        <Box display={"flex"} flexDirection={{xs: "column", sm:"row"}} gap={"15px"} justifyContent="center" alignItems={'center'} width='100%' flexWrap={"wrap"}>
            {categorias.map(categoria => (
            <CategoryCard key={categoria.id} categoria={categoria}/>
            ))}
        </Box>
    </Box>
  )
}

export default CategoryContainer