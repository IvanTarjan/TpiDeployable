import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CarsCategory = () => {
  const { cars } = useContext(BodyContext)
  const { name } = useParams()

  const neededCars = cars.filter(car => car.category == name)

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
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
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