import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReservationForm from '../commons/ReservationForm'
import DateAvailability from '../commons/DateAvailability'
import VehicleCardBooking from '../commons/VehicleCardBooking'

const Reservation = () => {
  const { cars } = useContext(BodyContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const selectedCar = cars.find(car => car.id == id)
  console.log(selectedCar)

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

      <div className={styles.bookingContainer}>
        <div className={styles.bookingForm} >
          <ReservationForm />
        </div>

        <div className={styles.bookingCalendar} >

        </div>

        <div className={styles.bookingCard} >
          <VehicleCardBooking car={selectedCar} />
        </div>

      </div>
    </>
  )
}

export default Reservation