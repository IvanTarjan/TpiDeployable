import React, { useEffect, useState } from 'react'
import styles from '../styles/Body.module.css'
import VehicleCard from '../commons/VehicleCard'
import axios from 'axios'
import BarraDeBusqueda from "./BarraDeBusqueda";
import CategoryContainer from './CategoryContainer';
import { Box } from '@mui/material';


const Body = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/cars")
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
      <BarraDeBusqueda />
      <CategoryContainer cars={cars} />
      <div className={styles.homeContainer}>
        {cars.map(car => (
          <VehicleCard
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </Box>
  )
}

export default Body