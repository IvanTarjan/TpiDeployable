import { IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { format } from 'date-fns'

const SearchResults = () => {
  const { cars, selectedCity } = useContext(BodyContext)
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)

  const filterCarsByCity = (city) => {
    const availableCities = []
    for (let i = 0; i < cars.length; i++) {
      for (let j = 0; j < cars[i].locations.length; j++) {
        if (cars[i].locations[j] == city) {
          availableCities.push(cars[i])
        }
      }
    }
    return availableCities
  }

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Vehiculos en {selectedCity} entre los dias {format(date[0].startDate, 'dd/MM/yyyy')} y {format(date[0].endDate, 'dd/MM/yyyy')}</h1>
        </div>
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.homeContainer}>
        {filterCarsByCity(selectedCity).map(car => (
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