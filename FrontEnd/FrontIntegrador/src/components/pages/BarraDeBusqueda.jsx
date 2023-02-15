import React, { useEffect, useState } from 'react'
import { Typography, Box, useMediaQuery, InputLabel, MenuItem, FormControl, Select, OutlinedInput } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import colors from '../styles/colors';
const BarraDeBusqueda = () => {

    const isMobile = useMediaQuery('(max-width:540px)');
    const [listaLocalizaciones, setListaLocalizaciones] = useState([])
    const [localizacion, setLocalizacion] = useState({provincia: "", pais: ""});
    const [fechaCheckIn, setFechaCheckIn] = useState("")

    const handleChange = (event) => {
        setLocalizacion(listaLocalizaciones[event.target.value]);
        console.log(listaLocalizaciones[event.target.value]);
    }

    useEffect(() => {

        // Axios imaginario
        setListaLocalizaciones([{ provincia: "pr1", pais: "p1" }, { provincia: "pr2", pais: "p2" }, { provincia: "pr3", pais: "p3" }, { provincia: "pr4", pais: "p4" }])
        console.log(listaLocalizaciones);
    }, [])

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    return (
        <Box display='flex' flexDirection={'column'} justifyContent='space-between' alignItems='center' width='100vw' backgroundColor={colors.c3} padding={"20px 0px"}>
            <Typography variant='h1' fontSize={'36px'} fontWeight="bold" color={colors.c4}>Busca ofertas en hoteles, casas y mucho más</Typography>
        <Box component='form' display='flex' justifyContent='center'>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    displayEmpty
                    sx={{width:'300px', height: 35 , backgroundColor: colors.background, borderRadius: '5px'}}
                    defaultValue = ""
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected === "") {
                            return <Box  sx={{display: 'flex', alignItems: 'center' , color: colors.fuenteBarraBusqueda, gap: '5px' }}>
                                <LocationOnIcon fontSize='medium'/>
                                <Typography fontWeight={600}>¿A dónde vamos?</Typography>
                            </Box>;
                            }

                            return <Box  sx={{display: 'flex', alignItems: 'center' , color: colors.c3, gap: '5px'}}>
                                <LocationOnIcon fontSize='medium'/>
                                <Typography fontWeight={600}>{localizacion.provincia}, {localizacion.pais}</Typography>
                            </Box>;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {listaLocalizaciones.map((locali, i) => (
                        <MenuItem value={i} key={i} >
                            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: `1.5px solid ${colors.principal}`, gap: '15px', padding: '5px', width: "100%" }}>
                                <LocationOnOutlinedIcon fontSize='medium'/>
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' color={colors.c3} >
                                    <Typography variant='subtitle2' fontWeight={'600'} color={'black'}>{locali.provincia}</Typography>
                                    <Typography variant='caption' color={colors.c3} fontWeight={'600'}>{locali.pais}</Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Box>
        </Box>
    )
}

export default BarraDeBusqueda