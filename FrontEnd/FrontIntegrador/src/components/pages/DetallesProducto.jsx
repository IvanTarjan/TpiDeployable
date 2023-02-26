import { Box, Button, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import colors from '../commons/colors';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const DetallesProducto = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({
        id: 0,
        category: "",
        name: "",
        image: "",
        price: 0,
        model: 0,
        message: "",
        airbag: "",
        gearbox: "",
        trunk: "",
        doors: 0,
        airConditioning: false,
        ABSBrake: false,
        fuel: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/cars/${id}`)
            .then(res => setProducto(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Box display="flex" flexDirection={"column"} justifyContent={"center"} alignItems="center" padding={"100px 0px"}>

            <Box component={"header"} color={colors.background} bgcolor={colors.c3} width="100vw" padding={"10px 4%"} display="flex" justifyContent={"space-between"} alignItems="center">
                <Box display={"flex"} flexDirection="column">
                    <Typography textTransform={"uppercase"} variant="caption">{producto.category}</Typography>
                    <Typography variant='h6' fontWeight={600}>{producto.name}</Typography>
                </Box>
                <Link to={"/"}>
                    <ArrowBackIosIcon color={"action"} fontSize="large"/>
                </Link>
            </Box>

            <Box width="100vw" padding={"10px 4%"} display="flex" flexDirection={"column"} justifyContent={"center"} gap="20px">
                <Typography variant='h5' fontWeight={600}>
                    {producto.title}
                </Typography>
                <Typography variant='body2'>
                    {producto.message}
                </Typography>
            </Box>

            <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                <Typography width={'100vw'} borderBottom={`1px solid ${colors.principal}`} color={colors.c3} fontWeight={600} padding={"10px 4%"} variant="h5">¿Qué ofrece este auto?</Typography>
                <Box display={"grid"} gridTemplateColumns={{xs: "1fr", md: "1fr 1fr", lg:"1fr 1fr 1fr 1fr"}}>
                    
                </Box>
            </Box>

            <Button onClick={() => console.log(producto)}>Log Producto</Button>
        </Box>
    )
}

export default DetallesProducto