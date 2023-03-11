import React from 'react'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import SosIcon from '@mui/icons-material/Sos';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import styles from '../styles/Body.module.css'
import { Box, Typography } from '@mui/material';

const Policies = ({selectedCar}) => {
  return (
    <Box className={styles.iconsContainerDetail} >

  {selectedCar.politica.map(item => (
          <div key={item.id}>
            <h4>{item.titulo}</h4>
            <p>{item.descripcion}</p>
          </div>
        ))}
    </Box>
  )
}

export default Policies