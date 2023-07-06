import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios'
import loadingGif from '../../assets/Loading1.gif'
import { HeaderContext } from '../contexts/HeaderContext'
import Swal from 'sweetalert2'
import { BodyContext } from '../contexts/BodyContext'

const MyReservations = () => {
  const [reserves, setReserves] = useState([])
  const [loading, setLoading] = useState(true)
  const { isLog, currentUser } = useContext(HeaderContext);
  const { apiUrl } = useContext(BodyContext);
  const { userId } = useParams()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const idMustBeMine = () => {
    userId != currentUser.user_id && navigate(`/${currentUser.user_id}/reservations`)
  }

  useEffect(() => {
    if (isLog) {
      !currentUser.role.includes("USER_ADMIN") && idMustBeMine();

      axios.get(`${apiUrl}/api/reserva/usu/${currentUser.user_id}`, {
        headers: {
          'Authorization': `${currentUser.tokenType} ${currentUser.accessToken}`
        }
      }).then(
        res => {
          setReserves(res.data);
          setLoading(false)
        }
      ).catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error buscando tus reservas',
          text: 'Recarga la pagina o proba mas tarde',
        })
      })
    }

  }, [isLog])

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Mis Reservas</h1>
        </div>
        <IconButton onClick={handleClick} sx={{ marginRight: "10px" }}>
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>

      {loading ? <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"375px"} padding="20px" borderRadius={"10px"}>
        <img src={loadingGif} alt="Loading..." style={{ height: "200px", width: "auto" }} />
      </Box> :


        <div className={styles.homeContainer}>
          {reserves.length ? reserves.map((reserve, i) => (
            <Box key={i} boxShadow={"0px 0px 2px gray"} borderRadius="8px">
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
            <Box display={"flex"} flexDirection="column" justifyContent={"center"} textAlign="center" alignItems={"center"} max-width={"375px"} height={"375px"} boxShadow={"0px 0px 10px gray"} padding="20px" borderRadius={"10px"} gap="10px" margin={"10px"}>
              <Typography variant='h6' >Aún no has efectuado ninguna reserva</Typography>
              <IconButton onClick={() => navigate('/')} color="secondary">
                <HomeOutlinedIcon fontSize='large' />
              </IconButton>
            </Box>
          }
        </div>}
    </>
  )
}

export default MyReservations