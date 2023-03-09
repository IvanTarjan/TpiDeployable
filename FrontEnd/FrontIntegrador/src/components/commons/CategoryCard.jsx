import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import colors from './colors';
import styles from '../styles/Body.module.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({ categoria, carImgs }) => {

    const randomImg = Math.floor(carImgs.length * Math.random())

    return (
        <Card className={styles.categoryImagesContainer} sx={{ height: 380, width: 375 }}>
            <CardMedia
                component="img"
                sx={{ height: 280 }}
                // carImgs[randomImg].imagen[0].url_img
                image={categoria.url_imagen}
                alt={categoria.titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={600}>
                    <Link to={`/category/${categoria.titulo}`} style={{ color: colors.c3 }} >{categoria.titulo[0].toUpperCase() + categoria.titulo.slice(1)}</Link>
                </Typography>
                <Typography variant="body2" fontWeight={600} color={colors.fuenteBarraBusqueda}>
                    {carImgs.length} vehiculos
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard