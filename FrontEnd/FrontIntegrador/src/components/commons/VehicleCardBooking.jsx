import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../styles/Body.module.css'
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';
import { BodyContext } from '../contexts/BodyContext';
import { Button, useMediaQuery } from '@mui/material';

const VehicleCardBooking = ({ car, handleConfirm, dateRange }) => {

  return (
    <>
      <h1>Detalle de la reserva</h1>

      <Card data-testid="car-card" className={styles.carCardBooking}>
        <Box className={styles.imageContainer}>
          <CardMedia className={styles.carImages}
            image={car.imagen.find(img=> img.titulo == "Main").url_img}
            title={car.titulo}
          />
        </Box>

        <CardContent sx={{ width: '100%' }} className={styles.cardContent}>
          <p>{car.categoria.titulo}</p>
          <Typography gutterBottom variant="h5" component="div">
            {car.titulo}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }} >
            <LocationOnIcon /> Ciudad: {car.ubicacion.nombre}
          </Typography>

          <br />
          <hr />
          <br />

          <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }} >
            <TodayIcon sx={{ paddingRight: '5px', fontSize: 30 }} />  Retiro: {dateRange[0] ? dateRange[0].format() : ""}
          </Typography>

          <br />
          <hr />
          <br />

          <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }} >
            <TodayIcon sx={{ paddingRight: '5px', fontSize: 30 }} />  Devolucion: {dateRange[1] ? dateRange[1].format() : ""}
          </Typography>

          <Button onClick={handleConfirm} variant='contained' size="large" sx={{ justifySelf: "center", marginTop: '30px' }} fullWidth >Confirmar reserva</Button>

        </CardContent>
      </Card>
    </>
  );
}

export default VehicleCardBooking