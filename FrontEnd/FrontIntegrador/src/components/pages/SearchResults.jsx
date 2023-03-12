import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { getDaysArray, hasOverlappingDays } from '../commons/datePickerHelpers'


const SearchResults = () => {
  const { cars, selectedCity, allDates, dateRange } = useContext(BodyContext)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }


  const filterCarsByCity = (city) => {
    return cars.filter(car=> car.ubicacion.id == city.id);
  }

  const filterCarsByDays = (selectedDates, carArr) => {
    const filteredCars = [];
    carArr.forEach(car => {
      let dayArr = [];
      car.reserva.forEach((range) => dayArr = dayArr.concat(getDaysArray(range.fecha_inicio, range.fecha_fin)))
      if (!hasOverlappingDays(selectedDates, dayArr)){
        filteredCars.push(car)
      }
    });
    return filteredCars;
  }

  const availableCars = filterCarsByDays(allDates, filterCarsByCity(selectedCity));

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Vehiculos disponibles en {selectedCity.nombre} desde el {dateRange[0].format()} al {dateRange[1].format()}</h1>
        </div>
        <IconButton sx={{ width: 75 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      <div className={styles.homeContainer}>
        {availableCars.length ?availableCars.map(car => (
          <VehicleCard
            key={car.id}
            car={car}
          />
        ))
        :
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"flex-start"} width={"375px"} height={"375px"} boxShadow={"0px 0px 10px gray"} padding="20px" borderRadius={"10px"} gap="10px">
          <Typography variant='h6'>No se pudo encontrar ningun vehiculo con los filtros aplicados</Typography>
          <Link variant="subtitle1" href='/'>Proba cambiando los filtros</Link>
        </Box>
        }
      </div>
    </>
  )
}

export default SearchResults