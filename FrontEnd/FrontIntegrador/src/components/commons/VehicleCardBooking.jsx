import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../styles/Body.module.css'
import { Box } from '@mui/system';

const VehicleCardBooking = ({ car }) => {

  return (
    <>
      <h1>Detalle de la reserva</h1>

      <Card data-testid="car-card" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Box className={styles.imageContainer}>
          <CardMedia className={styles.carImages}
            image={car.imagen[0].url_img}
            title={car.titulo}
          />
        </Box>

        <CardContent className={styles.cardContent}>
          <p>{car.categoria.titulo}</p>
          <Typography gutterBottom variant="h6" component="div">
            {car.titulo}
          </Typography>

          <Box className={styles.iconsContainer} >
            {car.caracteristica.map(item => (
              <Typography key={item.id} fontSize={'14px'} className={styles.cardContainer} display="flex" gap={1}><img src={item.icono} style={{ width: "auto", height: "15px" }} />{item.titulo}</Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default VehicleCardBooking