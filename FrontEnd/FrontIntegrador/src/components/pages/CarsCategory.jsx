import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'

const CarsCategory = () => {
  const { cars } = useContext(BodyContext)
  const { name } = useParams()

  const neededCars = cars.filter(car => car.category == name)

  return (
    <div className={styles.homeContainer}>
      {neededCars.map(car => (
        <VehicleCard
          key={car.id}
          car={car}
        />
      ))}
    </div>
  )
}

export default CarsCategory