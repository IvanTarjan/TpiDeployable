import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import colors from './colors';
import styles from '../styles/Body.module.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({ categoria}) => {
    const randomImgIndex = Math.floor(categoria.productos.length * Math.random())
    const randomImg = categoria.productos.length > 0?categoria.productos[randomImgIndex].imagen.find(img => img.titulo == "Vista General").url_img : categoria.url_imagen;
    

    return (
        <Card className={styles.categoryImagesContainer} sx={{ width: 350 }}>
            <CardMedia
                component="img"
                sx={{ height: "280px", objectFit: "cover" }}
                image={randomImg}
                alt={categoria.titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight={600}>
                    <Link to={`/category/${categoria.titulo}`} style={{ color: colors.c3 }} >{categoria.titulo[0].toUpperCase() + categoria.titulo.slice(1)}</Link>
                </Typography>
                <Typography variant="body2" fontWeight={600} color={colors.fuenteBarraBusqueda}>
                    {categoria.productos.length} vehiculos
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CategoryCard