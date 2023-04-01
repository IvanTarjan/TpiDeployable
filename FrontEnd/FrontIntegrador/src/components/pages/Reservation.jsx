import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BodyContext } from '../contexts/BodyContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ReservationForm from '../commons/ReservationForm'
import VehicleCardBooking from '../commons/VehicleCardBooking'
import Policies from '../commons/Policies'
import DateAvailabilityBooking from '../commons/DateAvailabilityBooking'
import ArrivalTime from '../commons/ArrivalTime'
import axios from 'axios'
import { HeaderContext } from '../contexts/HeaderContext'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

const Reservation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedCar, setSelectedCar] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { users, currentUser } = useContext(HeaderContext)
  const { dateRange } = React.useContext(BodyContext)
  const arrivalTime = document.querySelector('#app-time')

  let arrivalHour = document.querySelector('#app-time')

  useEffect(() => {
    axios.get(`http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/producto/${id}`)
      .then(res => {
        setSelectedCar(res.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const handleConfirm = async () => {
    if (dateRange.length != 2 || dateRange[0] == null) {
      return Swal.fire({
        title: 'Error!',
        text: 'Debe ingresar un rango de fechas',
        icon: 'error',
        confirmButtonColor: '#1DBEB4',
      })
    }

    if (arrivalTime.value == '') {
      return Swal.fire({
        title: 'Error!',
        text: 'Debe ingresar horario estimado de llegada',
        icon: 'error',
        confirmButtonColor: '#1DBEB4',
      })
    }

    const result = await Swal.fire({
      title: 'Por favor espere un instante',
      text: 'Estamos procesando su reserva...',
      icon: 'info',
      showConfirmButton: false,
      timer: 3000,
      didOpen: () => {
        Swal.showLoading()
      }
    }).then(res => {
      {
        navigate('/')
        axios.post('http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/reserva', {
          horario_llegada: arrivalHour.value + ':00',
          fecha_inicio: dateRange[0].format("YYYY-M-D"),
          fecha_fin: dateRange[1].format("YYYY-M-D"),
          producto: { id: parseInt(id) },
          usuario: { id: currentUser.id }
        }).then(data => {
          Swal.fire({
            title: 'Muchas gracias!',
            text: 'Su reserva se ha realizado con exito',
            icon: 'success',
            confirmButtonColor: '#1DBEB4',
          })
          emailjs.send("service_v1b8o5l","template_ps8m368",{
            from_name: "DigitalBooking",
            to_name: currentUser.nombre,
            message: `Tu reserva del ${selectedCar.titulo} se registro exitosamente`,
            recipientEmail: currentUser.email,
            });
        })
          .catch(err => {
            console.log(err)
            Swal.fire({
              title: 'Error!',
              text: 'Lamentablemente la reserva no ha podido realizarse”. Por favor, intente más tarde',
              icon: 'error',
              confirmButtonColor: '#1DBEB4',
            })
          })
      }
    })
  }

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.headerCategory}>
        <div className={styles.headerBookingTitle}>
          <p>{isLoading ? "Loading..." : selectedCar.categoria.titulo}</p>
          <h1 style={{ paddingTop: '0' }}>{isLoading ? "Loading..." : selectedCar.titulo}</h1>
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
              <ReservationForm loggedUser={currentUser} />
            </div>

            <div className={styles.bookingCalendar} >
              <DateAvailabilityBooking id={id} dateRangeArr={selectedCar.reserva.map(res => [res.fecha_inicio, res.fecha_fin])} />
            </div>

            <div className={styles.bookingArrival}>
              <ArrivalTime />
            </div>

            <div className={styles.bookingCard} >
              <VehicleCardBooking car={selectedCar} handleConfirm={handleConfirm} dateRange={dateRange} />
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