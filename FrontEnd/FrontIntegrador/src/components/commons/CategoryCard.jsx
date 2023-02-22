import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react'

const CategoryCard = ({categoria}) => {
  return (
    <Card sx={{ maxWidth: 345, height:"200px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={categoria.foto}
          alt={categoria.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {categoria.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {categoria.cantProductos}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CategoryCard