import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../commons/HeaderDetails'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import InfoIcon from '@mui/icons-material/Info';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LuggageIcon from '@mui/icons-material/Luggage';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TuneIcon from '@mui/icons-material/Tune';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { DoorBack, Share } from '@mui/icons-material';
import Policies from '../commons/Policies'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const CarDetails = () => {
  const { id } = useParams()
  const { cars, isLike, setIsLike } = useContext(BodyContext)


  const handleClick = () => {
    setIsLike(prev => !prev)
  }

  const selectedCar = cars.find(car => car.id == id);

  return (
    <div>
      <HeaderDetails car={selectedCar} />
      <div className={styles.shareLikeBtnContainer}>
        <IconButton sx={{ width: 24 }} edge={'end'} disableRipple={true} >
          <ShareIcon />
        </IconButton>
        <IconButton sx={{ width: 24 }} edge={'start'} disableRipple={true} onClick={handleClick}>
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>

      <div className={styles.photosContainer}>
        <div className={styles.bigPhoto}>
          <img src={selectedCar.image} />
        </div>
        <div className={styles.smallPhotoOne}>
          <img src={selectedCar.image} />
        </div>
        <div className={styles.smallPhotoTwo}>
          <img src={selectedCar.image} />
        </div>
        <div className={styles.smallPhotoThree} >
          <img src={selectedCar.image} />
        </div>
        <div className={styles.smallPhotoFour}>
          <img src={selectedCar.image} />
        </div>
      </div>

      <div className={styles.moreData}>
        <h1>Descripcion para {selectedCar.name}</h1>
        <p>{selectedCar.message}</p>

        <h1>¿Qué ofrece este vehiculo?</h1>
        <Box className={styles.iconsContainerDetail} >
          <div>
            <Typography fontSize={'14px'} className={styles.cardContainer} ><InfoIcon fontSize='small' />Modelo {selectedCar.model}</Typography>
            <Typography fontSize={'14px'} className={styles.cardContainer}><AirlineSeatReclineNormalIcon fontSize='small' />{selectedCar.airbag}</Typography>
          </div>

          <div>
            <Typography fontSize={'14px'} className={styles.cardContainer}><TuneIcon fontSize='small' />Caja {selectedCar.gearbox}</Typography>
            <Typography fontSize={'14px'} className={styles.cardContainer}><LuggageIcon fontSize='small' />Baul {selectedCar.trunk}</Typography>
          </div>

          <div>
            <Typography fontSize={'14px'} className={styles.cardContainer}><DoorBack fontSize='small' />{selectedCar.doors} puertas</Typography>
            {selectedCar.airConditioning && <Typography fontSize={'14px'} className={styles.cardContainer}><AcUnitIcon fontSize='small' />Aire acondicionado</Typography>}
          </div>

          <div>
            {selectedCar.ABSBrake ? <Typography fontSize={'14px'} className={styles.cardContainer}><HealthAndSafetyIcon fontSize='small' />Frenos ABS</Typography> : <Typography fontSize={'14px'} className={styles.cardContainer}><HealthAndSafetyIcon fontSize='small' />Frenos a disco</Typography>}
            <Typography fontSize={'14px'} className={styles.cardContainer}><LocalGasStationIcon fontSize='small' />{selectedCar.fuel}</Typography>
          </div>
        </Box>

        <h1>Qué tenés que saber</h1>
        <p>Entrega en aeropuerto: Consultar costo</p>
        <p>Devolución en aeropuerto: Consultar costo</p>
        <p>Sillita de bebé: Consultar costo</p>
        <Policies />
      </div>
    </div>
  )
}

export default CarDetails