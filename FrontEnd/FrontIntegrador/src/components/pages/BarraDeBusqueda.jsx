import React, { useEffect, useState } from 'react'
import { Typography, Box, useMediaQuery, InputLabel, MenuItem, FormControl, Select, OutlinedInput, TextField, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import colors from '../commons/colors';
import dayjs from 'dayjs';
import RangeDatePicker from '../commons/RangeDatePicker';

const BarraDeBusqueda = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [listaLocalizaciones, setListaLocalizaciones] = useState([])
    const [localizacion, setLocalizacion] = useState({ provincia: "", pais: "" });
    const [dateRange, setDateRange] = useState([null, null]);
    const handleChange = (event) => {
        setLocalizacion(listaLocalizaciones[event.target.value]);
    }

    useEffect(() => {
        // Axios imaginario
        setListaLocalizaciones([{ provincia: "San Carlos de Bariloche", pais: "Argentina" }, { provincia: "Buenos Aires", pais: "Argentina" }, { provincia: "Mendoza", pais: "Argentina" }, { provincia: "Cordoba", pais: "Argentina" }])
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
        <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' width='100vw' height={'200px'} marginTop={'60px'} backgroundColor={colors.c3} padding={"20px 0px"}>
            <Typography variant='h1' fontSize={'36px'} fontWeight="bold" color={colors.c4}>Busca ofertas en hoteles, casas y mucho más</Typography>
            <FormControl sx={{ m: 1, width: '70%', mt: 3, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "row", gap: '10px' }}>
                <Select
                    displayEmpty
                    sx={{ width: '500px', height: '40px', backgroundColor: colors.background, borderRadius: '5px' }}
                    defaultValue=""
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected === "") {
                            return <Box sx={{ display: 'flex', alignItems: 'center', color: colors.fuenteBarraBusqueda, gap: '5px' }}>
                                <LocationOnIcon fontSize='medium' />
                                <Typography fontWeight={600} variant='subtitle1'>¿A dónde vamos?</Typography>
                            </Box>;
                        }
                        return <Box sx={{ display: 'flex', alignItems: 'center', color: colors.c3, gap: '5px' }}>
                            <LocationOnIcon fontSize='medium' />
                            <Typography fontWeight={600} variant='subtitle1'>{localizacion.provincia}, {localizacion.pais}</Typography>
                        </Box>;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {listaLocalizaciones.map((locali, i) => (
                        <MenuItem value={i} key={i} >
                            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: `1.5px solid ${colors.principal}`, gap: '15px', padding: '5px', width: "100%" }}>
                                <LocationOnOutlinedIcon fontSize='medium' />
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' color={colors.c3} >
                                    <Typography variant='subtitle2' fontWeight={'600'} color={'black'}>{locali.provincia}</Typography>
                                    <Typography variant='caption' color={colors.c3} fontWeight={'600'}>{locali.pais}</Typography>
                                </Box>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>

                <RangeDatePicker dateRange={dateRange} setDateRange={setDateRange} />

                <Button sx={{ backgroundColor: colors.principal, color: colors.background, textTransform: 'none', width: '100px', height: '40px', '&:hover': { backgroundColor: colors.principal } }}
                    onClick={() => { console.log(`${localizacion.provincia}, ${localizacion.pais} fecha: ${dateRange[0]} al ${dateRange[1]}`); }}>
                    Aplicar
                </Button>
            </FormControl>

        </Box>
    )
}

export default BarraDeBusqueda