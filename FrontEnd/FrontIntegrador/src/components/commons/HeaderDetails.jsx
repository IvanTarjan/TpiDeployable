import React from 'react'
import styles from '../styles/Header.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HeaderDetails = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className={styles.headerDetails}>
        <div className={styles.headerDetailsTitle}>
          <p>Categoria</p>
          <h1>Nombre</h1>
        </div>
        <IconButton onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.locationData}>
        <div className={styles.locationDataTitle}>
          <div className={styles.locationDataTitleCity}><LocationOnIcon color='secondary'></LocationOnIcon><span>Ciudad, Provincia, Pais</span></div>
          <p>Distancia desde el centro</p>
        </div>

        <div className={styles.locationDataValue}>
          <p>Valoracion</p>
          <div className={styles.locationDataValueNumber}>10</div>
        </div>

      </div>
    </>
  )
}

export default HeaderDetails