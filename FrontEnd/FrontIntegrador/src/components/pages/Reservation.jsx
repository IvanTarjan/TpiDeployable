import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReservationForm from '../commons/ReservationForm'
import VehicleCardBooking from '../commons/VehicleCardBooking'
import axios from 'axios'
import Policies from '../commons/Policies'
import DateAvailabilityBooking from '../commons/DateAvailabilityBooking'
import ArrivalTime from '../commons/ArrivalTime'

const Reservation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedCar, setSelectedCar] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/producto/${id}`)
      .then(res => {
        setSelectedCar(res.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.headerCategory}>
        <div className={styles.headerBookingTitle}>
          <p>{isLoading? "Loading..." :selectedCar.categoria.titulo}</p>
          <h1 style={{ paddingTop: '0' }}>{isLoading? "Loading..." :selectedCar.titulo}</h1>
        </div>
        <IconButton disableRipple={true} sx={{ width: 175 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      {isLoading ?
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"375px"} padding="20px" borderRadius={"10px"}>
          <Typography variant='h5'>Cargando...</Typography>
        </Box>

        :
        <>
        <div className={styles.bookingContainer}>
          <div className={styles.bookingForm} >
            <ReservationForm />
          </div>

        <div className={styles.bookingCalendar} >
          <DateAvailabilityBooking id={id} dateRangeArr={selectedCar.reserva.map(res => [res.fecha_inicio, res.fecha_fin])} />
        </div>

        <div className={styles.bookingArrival}>
          <ArrivalTime />
        </div>

        <div className={styles.bookingCard} >
          <VehicleCardBooking car={selectedCar} />
        </div>
      </div>

      <br />
      <br />

      <div className={styles.moreData}>
        <h1>Qué tenés que saber</h1>
        <hr className={styles.line} />
        <br />
        <Policies selectedCar={selectedCar} />
      </div>
      </>
    }
    </>
  )
}

export default Reservation