import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Header.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BodyContext } from '../contexts/BodyContext';

const HeaderDetails = ({ car }) => {

  const navigate = useNavigate()
  const handleClick = () => {
    console.log(document.referrer);
    if (document.referrer.includes("/administration")) {
      navigate(-1);
  } else {
      navigate('/');
  }
  }
  return (
    <>
      <div className={styles.headerDetails}>
        <div className={styles.headerDetailsTitle}>
          <p>{car.categoria.titulo}</p>
          <h1 style={{ paddingTop: '0' }}>{car.titulo}</h1>
        </div>
        <IconButton disableRipple={true}  onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.locationData}>
        <div className={styles.locationDataTitle}>
          <LocationOnIcon color='secondary'></LocationOnIcon>
          <div className={styles.locationDataTitleCity}>

            <span>{car.ubicacion.nombre}, {car.ubicacion.pais}</span>
          </div>
        </div>

        <div className={styles.locationDataValue}>
          <p>{car.puntuacionAvg > 9 ? "Excelente" : car.puntuacionAvg > 7 ? "Muy bueno" : car.puntuacionAvg > 5 ? "Bueno" : "Terrible"}</p>
          <div className={styles.locationDataValueNumber}>{car.puntuacionAvg}</div>
        </div>
      </div>
    </>
  )
}

export default HeaderDetails