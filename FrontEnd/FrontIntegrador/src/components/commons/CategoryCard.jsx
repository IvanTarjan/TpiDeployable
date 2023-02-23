import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from 'react'
import colors from './colors';
import styles from '../styles/Body.module.css'

const CategoryCard = ({ categoria, carImgs }) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    const randomImgIndex = getRandomInt(carImgs.length)

    return (
        <Card sx={{ height: 380, width: 360}}>
                <CardMedia
                    className={styles.categoryImages}
                    component="img"
                    sx={{ height: 280 }}
                    image={carImgs[randomImgIndex].image}
                    alt={categoria.nombre}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight={600} color={colors.c3}>
                        {categoria.nombre}
                    </Typography>
                    <Typography variant="body2" fontWeight={600} color={colors.fuenteBarraBusqueda}>
                        {carImgs.length} vehiculos
                    </Typography>
                </CardContent>
            
        </Card>
    )
}

export default CategoryCard