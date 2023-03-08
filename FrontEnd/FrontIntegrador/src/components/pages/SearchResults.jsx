import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SearchResults = () => {
  const { cars, selectedCity, dateRange } = useContext(BodyContext)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const filterCarsByCity = (city) => {
    const availableCars = []
    for (let i = 0; i < cars.length; i++) {
      for (let j = 0; j < cars[i].locations.length; j++) {
        if (cars[i].locations[j] == city) {
          availableCars.push(cars[i])
        }
      }
    }
    return availableCars
  }
  const availableCarsByCity = filterCarsByCity(selectedCity)

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Vehiculos disponibles en {selectedCity} desde {dateRange[0]} al {dateRange[1]}</h1>
          <h4 style={{ paddingLeft: '40px', color: 'white' }}>Haga click en boton VER MAS para mayor informacion</h4>
        </div>
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.homeContainer}>
        {availableCarsByCity.map(car => (
          <VehicleCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </>
  )
}

export default SearchResults