import React, { useContext } from 'react'
import styles from '../styles/Body.module.css'
import VehicleCard from '../commons/VehicleCard'
import BarraDeBusqueda from "./BarraDeBusqueda";
import CategoryContainer from './CategoryContainer';
import { Box } from '@mui/material';
import { BodyContext } from '../contexts/BodyContext';

const Body = () => {
  const { cars, categorias } = useContext(BodyContext)

  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
      <BarraDeBusqueda />
      <CategoryContainer cars={cars} categorias={categorias} />
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