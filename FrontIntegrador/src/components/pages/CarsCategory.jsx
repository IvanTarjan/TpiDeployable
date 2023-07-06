import { IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios'

const CarsCategory = () => {
  const { name } = useParams()
  const [neededCars, setNeededCars] = useState([])
  const { apiUrl } = useContext(BodyContext);

  useEffect(() => {
    axios.get(`${apiUrl}/api/producto/c/${name}`)
      .then(res => setNeededCars(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Vehiculos categoria {name}</h1>
        </div>
        <IconButton disableRipple={true} sx={{ width: 175 }} onClick={handleClick} >
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.homeContainer}>
        {neededCars.map(car => (
          <VehicleCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </>
  )
}

export default CarsCategory