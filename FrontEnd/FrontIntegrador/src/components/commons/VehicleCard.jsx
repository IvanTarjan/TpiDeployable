import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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
    <Card sx={{ maxWidth: 650 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={car.image}
        title={car.name}
      />
      <CardContent>
        <p>{car.category}</p>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Box className={styles.iconsContainer} >

          <Box>
            <Typography className={styles.cardContainer} ><InfoIcon />Modelo {car.model}</Typography>
            <Typography className={styles.cardContainer}><AirlineSeatReclineNormalIcon />{car.airbag}</Typography>
            <Typography className={styles.cardContainer}><TuneIcon />{car.gearbox}</Typography>
            <Typography className={styles.cardContainer}><LuggageIcon />Baul {car.trunk}</Typography>
          </Box>

          <Box>
            <Typography className={styles.cardContainer}><DoorBack />{car.doors} puertas</Typography>
            {car.airConditioning && <Typography className={styles.cardContainer}><AcUnitIcon />Aire acondicionado</Typography>}
            {car.ABSBrake ? <Typography className={styles.cardContainer}><HealthAndSafetyIcon />Frenos ABS</Typography> : <Typography className={styles.cardContainer}><HealthAndSafetyIcon />Frenos a disco</Typography>}
            <Typography className={styles.cardContainer}><LocalGasStationIcon />{car.fuel}</Typography>

          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {car.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" fullWidth>ver mas</Button>
      </CardActions>
    </Card>
  );
}