import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'

import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import axios from 'axios'

const MyReservations = () => {
    const [reserves, setReserves] = useState([])
    const [loading, setLoading] = useState(true)
    const { userId } = useParams()
    const navigate = useNavigate()
    const handleClick = () => {
      navigate('/')
    }
    useEffect(() => {
        axios.get(`http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/usuario/${userId}`).then(
            res => {
                console.log(res.data);
                setReserves(res.data.reserva);
                setLoading(false)
            }
        )
    }, [])

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Mis Reservas</h1>
        </div>
        <IconButton disableRipple={true} sx={{ width: 175 }} onClick={handleClick}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      {loading? <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"375px"} padding="20px" borderRadius={"10px"}>
        <Typography variant='h5'>Buscando...</Typography>
      </Box>:

      
      <div className={styles.homeContainer}>
        {reserves.length ?reserves.map((reserve, i) => (
        <Box key={i} boxShadow={"0px 0px 2px black"} borderRadius="8px">
            <Box display={"flex"} justifyContent="space-between" padding="0px 20px">
            <Typography>{reserve.fecha_inicio}</Typography>
            <Typography>-</Typography>
            <Typography>{reserve.fecha_fin}</Typography>
            </Box>
          <VehicleCard
            car={reserve.producto}
          />
          </Box>
        ))
        :
        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"flex-start"} width={"375px"} height={"375px"} boxShadow={"0px 0px 10px gray"} padding="20px" borderRadius={"10px"} gap="10px">
          <Typography variant='h6'>No se pudo encontrar ningun vehiculo con los filtros aplicados</Typography>
          <Link variant="subtitle1" href='/'>Proba cambiando los filtros</Link>
        </Box>
        }
      </div>}
    </>
  )
}

export default MyReservations