import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Header.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BodyContext } from '../contexts/BodyContext';

const HeaderDetails = ({ car }) => {

  const { localizaciones, selectedCity, randomLocation } = useContext(BodyContext)

  const selectedCityData = localizaciones.find(location => location.nombre == selectedCity);


  const [score, setScore] = useState(0);

  const getAvg = (car) => {
    let avg = 0;
    if (car.puntuacion.length > 0) {
      car.puntuacion.forEach(c => {
        avg += c.puntuacion;
      });
      avg = avg / car.puntuacion.length;
    }
    return avg;
  }

  useEffect(() => {
    setScore(getAvg(car));
  }, [])


  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className={styles.headerDetails}>
        <div className={styles.headerDetailsTitle}>
          <p>{car.categoria.titulo}</p>
          <h1 style={{ paddingTop: '0' }}>{car.titulo}</h1>
        </div>
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.locationData}>
        <div className={styles.locationDataTitle}>
          <LocationOnIcon color='secondary'></LocationOnIcon>
          <div className={styles.locationDataTitleCity}>

            <span>{car.ubicacion.nombre}, {car.ubicacion.pais}</span>
            <p>A 4 m del centro</p>
          </div>
        </div>

        <div className={styles.locationDataValue}>
          <p>{score > 9 ? "Excelente" : score > 7 ? "Muy bueno" : score > 5 ? "Bueno" : "Terrible"}</p>
          <div className={styles.locationDataValueNumber}>{score}</div>
        </div>
      </div>
    </>
  )
}

export default HeaderDetails