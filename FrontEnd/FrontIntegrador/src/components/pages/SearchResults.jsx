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

  // const removeReservedCars = (avaCars, reservedCars, start, end) => {
  //   for (let i = 0; i < avaCars.length; i++) {
  //     for (let j = 0; j < reservedCars.length; j++) {
  //       if (avaCars[i].id === reservedCars[j].car_id) {
  //         if (start <= reservedCars[j].startDate && end >= reservedCars[j].endDate) {
  //           avaCars.splice(avaCars.indexOf(avaCars[i]), 1)
  //         }
  //       }
  //     }
  //   }
  //   return avaCars
  // }
  // const availableCarsByDate = removeReservedCars(availableCarsByCity, reservations, startDay, endDay)

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Vehiculos en {selectedCity} entre los dias {startDay} y {endDay}</h1>
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