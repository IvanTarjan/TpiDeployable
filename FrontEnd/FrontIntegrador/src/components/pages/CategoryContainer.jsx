import { Box, Typography } from '@mui/material'
import React from 'react'
import CategoryCard from '../commons/CategoryCard'
import colors from '../commons/colors'

const CategoryContainer = ({ cars, categorias }) => {

  return (
    <Box display={"flex"} flexDirection="column" margin={"15px 0px"} justifyContent="center" alignItems="center">
      <Typography sx={{ paddingLeft: '20px' }} variant='h3' display={"flex"} alignSelf={'flex-start'} fontSize="24px" fontWeight={600} color={colors.c3}>Buscar por tipo de vehiculo</Typography>
      <Box display={"grid"} gridTemplateColumns={{xs: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr 1fr"}}  gap={"15px"} justifyContent="center" alignItems={'center'} width='100%' flexWrap={"wrap"}>
        {categorias.map(categoria => (
          <CategoryCard key={categoria.id} categoria={categoria} carImgs={categoria.productos} />
        ))}
      </Box>
    </Box>
  )
}

export default CategoryContainer