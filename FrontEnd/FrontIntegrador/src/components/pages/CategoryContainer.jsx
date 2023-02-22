import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../commons/CategoryCard'

const CategoryContainer = () => {

    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
      const axiosTemp = [{id: 1, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 2, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 3, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}, {id: 4, nombre: "Economicos", cantProductos: 23, foto:"https://assets.iprofesional.com/assets/jpg/2020/03/492256.jpg?6.3.0"}];
      setCategorias(axiosTemp)
    }, [])
    

  return (
    <Box>
        <Typography variant='h3'display={"flex"} flexDirection="column">Buscar por tipo de vehiculo</Typography>
        <Box display={"flex"}>
            {categorias.map(categoria => (
            <CategoryCard key={categoria.id} categoria={categoria}/>
            ))}
        </Box>
    </Box>
  )
}

export default CategoryContainer