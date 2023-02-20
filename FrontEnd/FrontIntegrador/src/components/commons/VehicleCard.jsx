import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LuggageIcon from '@mui/icons-material/Luggage';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TuneIcon from '@mui/icons-material/Tune';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { DoorBack } from '@mui/icons-material';
import styles from '../styles/Body.module.css'
import { Box } from '@mui/system';

export default function VehicleCard({ car }) {
  return (
    <Card sx={{
      width: {
        xs: 380,
        md: 680,
        lg: 680
      },
      height: {
        xs: 700,
        md: 380,
        lg: 380,
      },
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row',
        lg: 'row'
      },
      alignItems: 'center'
    }}>
      <Box className={styles.imageContainer}>
        <CardMedia className={styles.carImages}
          sx={{ height: 280 }}
          image={car.image}
          title={car.name}
        />

        <Button variant='contained' size="small" >ver mas</Button>
      </Box>

      <CardContent className={styles.cardContent}>
        <p>{car.category}</p>
        <Typography gutterBottom variant="h6" component="div">
          {car.name}
        </Typography>
        <Box className={styles.iconsContainer} >
          <Typography fontSize={'14px'} className={styles.cardContainer} ><InfoIcon fontSize='small' />Modelo {car.model}</Typography>
          <Typography fontSize={'14px'} className={styles.cardContainer}><AirlineSeatReclineNormalIcon fontSize='small' />{car.airbag}</Typography>
          <Typography fontSize={'14px'} className={styles.cardContainer}><TuneIcon fontSize='small' />Caja {car.gearbox}</Typography>
          <Typography fontSize={'14px'} className={styles.cardContainer}><LuggageIcon fontSize='small' />Baul {car.trunk}</Typography>
          <Typography fontSize={'14px'} className={styles.cardContainer}><DoorBack fontSize='small' />{car.doors} puertas</Typography>
          {car.airConditioning && <Typography fontSize={'14px'} className={styles.cardContainer}><AcUnitIcon fontSize='small' />Aire acondicionado</Typography>}
          {car.ABSBrake ? <Typography fontSize={'14px'} className={styles.cardContainer}><HealthAndSafetyIcon fontSize='small' />Frenos ABS</Typography> : <Typography fontSize={'14px'} className={styles.cardContainer}><HealthAndSafetyIcon fontSize='small' />Frenos a disco</Typography>}
          <Typography fontSize={'14px'} className={styles.cardContainer}><LocalGasStationIcon fontSize='small' />{car.fuel}</Typography>
        </Box>
        <Typography sx={{ paddingTop: '10px', paddingBottom: '10px' }} variant="body2" color="text.secondary">
          {car.message}
        </Typography>
      </CardContent>
    </Card>
  );
}