import React from 'react'
import styles from '../styles/Body.module.css'
import { Box } from '@mui/material';

const Policies = ({ selectedCar }) => {
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