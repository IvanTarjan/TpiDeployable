import React, { useEffect, useState } from 'react'
import styles from '../styles/Body.module.css'
import VehicleCard from '../commons/VehicleCard'
import axios from 'axios'
import BarraDeBusqueda from "./BarraDeBusqueda";


const Body = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/cars")
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles.homeContainer}>
      {cars.map(car => (
        <VehicleCard
          key={car.id}
          car={car}
        />
      ))}
    </div>
  )
}

export default Body