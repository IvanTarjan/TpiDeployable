import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Body.module.css'
import VehicleCard from '../commons/VehicleCard'
import CategoryContainer from './CategoryContainer';
import { Box } from '@mui/material';
import { BodyContext } from '../contexts/BodyContext';
import BarraDeBusqueda from '../pages/BarraDeBusqueda'
import axios from 'axios';


const Body = () => {
  const { categorias, apiUrl } = useContext(BodyContext);
  const [cars, setCars] = useState([]);

  
  useEffect(() => {
    axios.get(`${apiUrl}/api/producto/q/8`)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
      <BarraDeBusqueda />
      <CategoryContainer categorias={categorias} />
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