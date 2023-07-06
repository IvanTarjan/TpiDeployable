import { Box, Button, Link, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loadingGif from '../../assets/Loading1.gif'
import { BodyContext } from '../contexts/BodyContext';

const EmailVerification = () => {

    const {username} = useParams();
    const { apiUrl } = useContext(BodyContext);
    const [verificado, setVerificado] = useState(false);

    useEffect(() => {
     axios.get(`${apiUrl}/api/auth/verificarUsuario/${username}`).then(res=> {
        setVerificado(true);
     }).catch(e=> {

     })
    }, [])
    



  return (
    <Box wusernameth={'100%'} height={'100vh'} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} wusernameth={{xs:"90%", sm:"60%"}} height={"400px"} borderRadius={"20px"} border={"1px solusername #545776"} gap="30px" padding={"10px"}>
            {verificado?<><Typography variant='h5' textAlign={"center"}>Se verifico el mail asociado a tu cuenta</Typography>
            <Link href='/login' textAlign={"center"}>Hace click aca para loguearte</Link></>: <img src={loadingGif} alt="Loading..." style={{height: "200px", wusernameth: "auto"}}/>}
        </Box>
    </Box>
  )
}

export default EmailVerification