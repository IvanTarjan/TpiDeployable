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
import { useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

export default function VehicleCard({ car }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/category/${car.categoria.titulo}/car/${car.id}`)
  }

  return (
    <Card data-testid="car-card"  sx={{
      width: {
        xs: 375,
        md: 765,
        lg: 765,
        xl: 765,
      },
      height: {
        xs: 600,
        md: 280,
        lg: 280,
        xl: 280
      },
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row',
        lg: 'row'
      },
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box className={styles.imageContainer}>
        <CardMedia className={styles.carImages}
          sx={{ height: 280 , width: 375}}
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
          {/* <Typography fontSize={'14px'} className={styles.cardContainer} ><InfoIcon fontSize='small' />Modelo {car.model}</Typography> */}
          {car.caracteristica.map(item => (
            <Typography key={item.id} fontSize={'14px'} className={styles.cardContainer} display="flex" gap={1}><img src={item.icono} style={{width:"auto", height:"15px"}}/>{item.titulo}</Typography>
          ))}

        </Box>
        <Typography sx={{ paddingTop: '10px', paddingBottom: '10px' }} variant="body2" color="text.secondary">
          {car.descripcion.slice(0, 50)}...
        </Typography>
        <Button onClick={handleClick} variant='contained' size="small" sx={{justifySelf: "center"}} >ver mas</Button>
      </CardContent>
    </Card>
  );
}