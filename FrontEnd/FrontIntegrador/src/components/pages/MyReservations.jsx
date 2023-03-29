import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleCard from '../commons/VehicleCard'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios'
import loadingGif from '../../assets/Loading1.gif'

const MyReservations = () => {
    const [reserves, setReserves] = useState([])
    const [loading, setLoading] = useState(true)
    const { userId } = useParams()
    const navigate = useNavigate()
    const handleClick = () => {
      navigate('/')
    }
    useEffect(() => {
        axios.get(`http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/reserva/usu/${userId}`).then(
            res => {
                console.log(res.data);
                setReserves(res.data);
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
        <img src={loadingGif} alt="Loading..." style={{height: "200px", width: "auto"}}/>
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
          <Typography variant='h6'>Aún no has efectuado ninguna reserva</Typography>
          <IconButton onClick={navigate('/')}>
          <HomeOutlinedIcon fontSize='large'/>
          </IconButton>
        </Box>
        }
      </div>}
    </>
  )
}

export default MyReservations