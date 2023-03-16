import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReservationForm from '../commons/ReservationForm'
import VehicleCardBooking from '../commons/VehicleCardBooking'
import Policies from '../commons/Policies'
import DateAvailabilityBooking from '../commons/DateAvailabilityBooking'
import ArrivalTime from '../commons/ArrivalTime'

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
  )
}

export default Reservation