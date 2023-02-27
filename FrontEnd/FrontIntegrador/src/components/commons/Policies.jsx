import React from 'react'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import SosIcon from '@mui/icons-material/Sos';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import styles from '../styles/Body.module.css'
import { Box, Typography } from '@mui/material';

const Policies = () => {
  return (
    <Box className={styles.iconsContainerDetail} >
      <div>
        <Typography fontSize={'14px'} className={styles.cardContainer} ><SmokeFreeIcon fontSize='small' />Fumar: NO</Typography>
        <Typography fontSize={'14px'} className={styles.cardContainer}><NoMealsIcon fontSize='small' />Comer: NO</Typography>
        <Typography fontSize={'14px'} className={styles.cardContainer}><AddRoadIcon fontSize='small' />300 kms por día</Typography>
      </div>
      <div>
        <Typography fontSize={'14px'} className={styles.cardContainer}><SosIcon fontSize='small' />Asistencia 24 hs</Typography>
        <Typography fontSize={'14px'} className={styles.cardContainer}><RequestQuoteIcon fontSize='small' />Seguro todo riesgo con franquicia de $60.000</Typography>
      </div>
    </Box>
  )
}

export default Policies