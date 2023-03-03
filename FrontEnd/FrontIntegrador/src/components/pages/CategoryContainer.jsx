import { Box, Typography } from '@mui/material'
import React from 'react'
import CategoryCard from '../commons/CategoryCard'
import colors from '../commons/colors'

const CategoryContainer = ({ cars, categorias }) => {

  const filterByCategoryName = (nombre) => {
    return cars.filter(car => car.category == nombre).map(carImg => carImg.image[0].original)
  };

  return (
    <Box display={"flex"} flexDirection="column" margin={"15px 0px"} justifyContent="center" alignItems="center">
      <Typography variant='h3' display={"flex"} alignSelf={'flex-start'} fontSize="24px" fontWeight={600} color={colors.c3}>Buscar por tipo de vehiculo</Typography>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} gap={"5px"} justifyContent="center" alignItems={'center'} width='100%' flexWrap={"wrap"}>
        {categorias.map(categoria => (
          <CategoryCard key={categoria.id} categoria={categoria} carImgs={filterByCategoryName(categoria.nombre)} />
        ))}
      </Box>
    </Box>
  )
}

export default CategoryContainer