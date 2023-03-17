import { TextField } from '@mui/material'
import React from 'react'
import styles from '../styles/Body.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ArrivalTime = () => {

  return (
    <>
      <h1>Tu horario de llegada</h1>
      <div className={styles.arrivalContainer} >
        <div style={{ display: 'flex', alignItems: 'end', paddingLeft: '40px', gap: '10px' }}><CheckCircleOutlineIcon /><p>Tu vehiculo va a estar listo para el retiro a las 10:00 AM y las 11:00 PM</p></div>
        <p style={{ paddingLeft: '40px' }}>Indicá tu horario estimado de llegada</p>
        <TextField
          type={'time'}
          id='app-time'
          name='app-time'
          sx={{ width: '50%', paddingLeft: '40px', paddingTop: '10px' }}
        />
      </div>
    </>
  )
}

export default ArrivalTime