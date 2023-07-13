import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/Body.module.css'
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';
import { AdminTableDeleteButton } from './AdminHomeTableHelpers';
import { BodyContext } from '../contexts/BodyContext';

export default function VehicleCard({ car, setCars }) {
  const navigate = useNavigate();
  const { apiUrl } = useContext(BodyContext);

  const { currentUser} = useContext(HeaderContext);

  const caracteristicas = car.caracteristica.sort((a,b)=> 0.5- Math.random());
  caracteristicas.splice(4);

  const handleClick = () => {
    navigate(`/car/${car.id}`)
  }

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Card data-testid="car-card" sx={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: "relative"
    }}>
      <Box className={styles.imageContainer}>
        <CardMedia className={styles.carImages}
          sx={{ height: 280, width: isMobile?350:365 }}
          image={car.imagen.find(img => img.titulo == "Vista General").url_img}
          title={car.titulo}
        />
      </Box>
      {currentUser && currentUser.role.includes("ROLE_ADMIN")&& <Box position={"absolute"} left={"0px"} top={"10px"}><AdminTableDeleteButton endpoint={`${apiUrl}/api/producto`} id={car.id} arrayToFilter={setCars}/></Box>}
      <CardContent className={styles.cardContent} sx={{width: 350}}>
        <p>{car.categoria.titulo}</p>
        <Typography gutterBottom variant="h6" component="div">
          {car.titulo}
        </Typography>
        <Box className={styles.iconsContainer} >
          {/* <Typography fontSize={'14px'} className={styles.cardContainer} ><InfoIcon fontSize='small' />Modelo {car.model}</Typography> */}
          {caracteristicas.map(item => (
            <Typography key={item.id} fontSize={'14px'} className={styles.cardContainer} display="flex" gap={1}><img src={item.icono} style={{ width: "auto", height: "15px" }} />{item.titulo}</Typography>
          ))}

        </Box>
        <Typography sx={{ paddingTop: '10px', paddingBottom: '10px' }} variant="body2" color="text.secondary">
          {car.descripcion.slice(0, 80)}...
        </Typography>
        <Button onClick={handleClick} variant='contained' size="small" sx={{ justifySelf: "center" }} >ver mas</Button>
      </CardContent>
    </Card>
  );
}