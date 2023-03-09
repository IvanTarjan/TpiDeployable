import { IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SearchResults = () => {
  const { cars, selectedCity, reservations } = useContext(BodyContext)
  const location = useLocation()
  const [date, setDate] = useState(location.state)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const startDay = date[0]
  const endDay = date[1]

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
          <h1 style={{ paddingTop: '0' }}>Vehiculos disponibles en {selectedCity}</h1>
          <h4 style={{ paddingLeft: '40px', color: 'white' }}>Haga click en boton VER MAS para consultar disponibilidad de fechas</h4>
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