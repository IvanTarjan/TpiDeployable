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

export default function VehicleCard({ car }) {
  return (
    <Card sx={{ maxWidth: 635 }}>
      <CardMedia
        sx={{ height: 280 }}
        image={car.image}
        title={car.name}
      />
      <CardContent>
        <p>{car.category}</p>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Typography variant='h7' component={'div'}><InfoIcon />Modelo {car.model}</Typography>
        <Typography variant='h7' component={'div'}><AirlineSeatReclineNormalIcon />{car.airbag}</Typography>
        <Typography variant='h7' component={'div'}><TuneIcon />{car.gearbox}</Typography>
        <Typography variant='h7' component={'div'}><LuggageIcon />Baul {car.trunk}</Typography>
        <Typography variant='h7' component={'div'}><DoorBack />{car.doors}</Typography>
        {car.airConditioning && <Typography variant='h7' component={'div'}><AcUnitIcon />Aire acondicionado</Typography>}
        {car.ABSBrake ? <Typography variant='h7' component={'div'}><HealthAndSafetyIcon />Frenos ABS</Typography> : <Typography variant='h7' component={'div'}><HealthAndSafetyIcon />Frenos a disco</Typography>}
        <Typography variant='h7' component={'div'}><LocalGasStationIcon />{car.fuel}</Typography>
        <Typography variant="body2" color="text.secondary">
          {car.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">ver mas</Button>
      </CardActions>
    </Card>
  );
}