import { IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReservationForm from '../commons/ReservationForm'
import DateAvailability from '../commons/DateAvailability'
import VehicleCardBooking from '../commons/VehicleCardBooking'
import axios from 'axios'

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
          <p>{selectedCar.categoria.titulo}</p>
          <h1 style={{ paddingTop: '0' }}>{selectedCar.titulo}</h1>
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
        
        <div className={styles.bookingContainer}>
          <div className={styles.bookingForm} >
            <ReservationForm />
          </div>

          <div className={styles.bookingCalendar} >

          </div>

          <div className={styles.bookingCard} >
            <VehicleCardBooking car={selectedCar} />
          </div>

        </div>}
    </>
  )
}

export default Reservation