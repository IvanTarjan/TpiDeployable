import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BodyContext } from '../contexts/BodyContext';

const HeaderDetails = ({ car }) => {

  const { localizaciones, randomLocation } = useContext(BodyContext)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className={styles.headerDetails}>
        <div className={styles.headerDetailsTitle}>
          <p>{car.category}</p>
          <h1 style={{ paddingTop: '0' }}>{car.name}</h1>
        </div>
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.locationData}>
        <div className={styles.locationDataTitle}>
          <LocationOnIcon color='secondary'></LocationOnIcon>
          <div className={styles.locationDataTitleCity}>
            <span>{localizaciones[randomLocation].ciudad}, {localizaciones[randomLocation].provincia}, {localizaciones[randomLocation].pais}</span>
            <p>A {localizaciones[randomLocation].distancia} m del centro</p>
          </div>
        </div>

        <div className={styles.locationDataValue}>
          <p>{car.score > 9 ? "Excelente" : car.score > 7 ? "Muy bueno" : "Bueno"}</p>
          <div className={styles.locationDataValueNumber}>{car.score}</div>
        </div>
      </div>
    </>
  )
}

export default HeaderDetails