import { IconButton, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../commons/HeaderDetails'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import Policies from '../commons/Policies'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DateAvailability from '../commons/DateAvailability'
import Features from '../commons/Features'
import GalleryGrid from '../commons/GalleryGrid'
import Gallery from '../commons/Gallery'
import MapView from '../commons/MapView'
import SharePage from '../commons/SharePage'

const CarDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const currentPageUrl = window.location.href;

  const { id } = useParams()
  const { cars, isLike, setIsLike} = useContext(BodyContext)

  const selectedCar = cars.find(car => car.id == id);

  const coordinates = [selectedCar.latitud, selectedCar.longitud]

  const handleClick = () => {
    setIsLike(prev => !prev)
  }


  const isTablet = useMediaQuery('(max-width:1000px)');
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <HeaderDetails car={selectedCar} />
      <div className={styles.shareLikeBtnContainer}>
        <IconButton sx={{ width: 24 }} edge={'end'} disableRipple={true} onClick={handleOpen} >
          <ShareIcon />
        </IconButton>

        <SharePage open={open} han
        dleClose={handleClose} currentPageUrl={currentPageUrl} />

        <IconButton sx={{ width: 24 }} edge={'start'} disableRipple={true} onClick={handleClick}>
          {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>

      {isTablet || isMobile ? <Gallery selectedCar={selectedCar} /> : <GalleryGrid selectedCar={selectedCar} />}

      <div className={styles.moreData}>
        <h1>Descripcion para {selectedCar.titulo}</h1>
        <p>{selectedCar.descripcion}</p>

        <h1>¿Qué ofrece este vehiculo?</h1>
        <hr className={styles.line} />
        <br />
        <Features selectedCar={selectedCar} />

        <DateAvailability id={id} dateRangeArr={selectedCar.reserva.map(res=> [res.fecha_inicio, res.fecha_fin])}/>

        <h1>¿Dónde vas a estar?</h1>
        <hr className={styles.line} />
        <br />
        <div className={styles.mapContainer} >
          <MapView coordinates={coordinates} />
        </div>

        <h1>Qué tenés que saber</h1>
        <hr className={styles.line} />
        <br />


        <Policies selectedCar={selectedCar}/>
      </div>
    </div>
  )
}

export default CarDetails