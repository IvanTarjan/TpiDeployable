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

const Features = ({ selectedCar }) => {
  return (
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
  )
}

export default Features