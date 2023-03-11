import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LuggageIcon from '@mui/icons-material/Luggage';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TuneIcon from '@mui/icons-material/Tune';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { DoorBack } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from '../styles/Body.module.css'
import CircleIcon from '@mui/icons-material/Circle';

const Features = ({ selectedCar }) => {
  return (
    <Box className={styles.iconsContainerDetail} >
      {selectedCar.caracteristica.map(item => (
            <Typography key={item.id} fontSize={'14px'} className={styles.cardContainer} display="flex" gap={1}><img src={item.icono} style={{width:"auto", height:"15px"}}/>{item.titulo}</Typography>
          ))}
    </Box>
  )
}

export default Features