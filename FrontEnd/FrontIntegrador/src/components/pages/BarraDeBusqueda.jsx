import React, { useEffect, useRef, useState } from 'react'
import { Typography, Box, useMediaQuery, MenuItem, FormControl, Select, OutlinedInput, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import colors from '../commons/colors';
import DatePicker from "react-multi-date-picker"
import { CustomInput } from '../commons/DatePickerCustomComponents';
import axios from 'axios'




const BarraDeBusqueda = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:800px)');
    const [listaLocalizaciones, setListaLocalizaciones] = useState([])
    const [localizacion, setLocalizacion] = useState({ provincia: "", pais: "" });
    const [dateRange, setDateRange] = useState([null, null]);
    const calendarRef = useRef();

    const handleChange = (event) => {
        setLocalizacion(listaLocalizaciones[event.target.value]);
    }

    const handleSubmit = () => {
        console.log(`${localizacion.provincia}, ${localizacion.pais} fecha: ${dateRange[0]} al ${dateRange[1]}`);
        // para modificar
    }

    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    useEffect(() => {
        axios.get("http://localhost:5000/localizaciones")
            .then(res => setListaLocalizaciones(res.data))
            .catch(err => console.log(err))
            }, [])


    return (
        <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' width='100vw' marginTop={'60px'} backgroundColor={colors.c3} padding={"30px 0px"}>
            <Typography variant='h1' fontSize={isMobile ? '30px' : '36px'} fontWeight="bold" color={colors.c4} textAlign="center" padding={'20px'} >Busca ofertas en Autos Economicos, Pick Ups y mucho más</Typography>

            <FormControl sx={{ m: 1, width: isTablet ? '90%' : '70%', mt: 3, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: isMobile ? 'column' : 'row', gap: '10px' }}>
                <Select
                    id='selectLocalizacion'
                    displayEmpty
                    sx={{ width: isMobile ? '100%' : '37.5%', height: '40px', backgroundColor: colors.background, borderRadius: '5px' }}
                    defaultValue=""
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {

                        return <Box sx={{ display: 'flex', alignItems: 'center', color: selected === "" ? colors.fuenteBarraBusqueda : colors.c3, gap: '5px' }}>
                            <LocationOnIcon fontSize='medium' />
                            {selected === "" ? <Typography fontWeight={600} variant='subtitle1'>¿A dónde vamos?</Typography> :
                                <Typography fontWeight={600} variant='subtitle1'>{localizacion.provincia}, {localizacion.pais}</Typography>}
                        </Box>;
                    }}
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

                <DatePicker
                    style={{ width: '100%' }}
                    containerStyle={{ width: isMobile ? '100%' : '37.5%' }}
                    ref={calendarRef}
                    value={dateRange}
                    onChange={setDateRange}
                    months={months}
                    weekDays={weekDays}
                    range
                    rangeHover
                    render={<CustomInput />}
                    arrow={false}
                    offsetY={6}
                    numberOfMonths={isMobile ? 1 : 2}
                    plugins={[
                        <Box position="bottom" display={'flex'} justifyContent={isTablet ? 'center' : 'flex-end'} >
                            <Button onClick={() => calendarRef.current.closeCalendar()} sx={{ backgroundColor: colors.principal, color: colors.c4, width: isTablet ? '95%' : '35%', margin: '10px', textTransform: 'none', fontWeight: '600', '&:hover': { backgroundColor: colors.principal } }}>
                                Aplicar
                            </Button>
                        </Box>
                    ]}
                />

                <Button sx={{ backgroundColor: colors.principal, color: colors.background, textTransform: 'none', width: isMobile ? '100%' : '25%', height: '40px', '&:hover': { backgroundColor: colors.principal } }}
                    onClick={handleSubmit}>
                    Buscar
                </Button>
            </FormControl>

        </Box>
    )
}

export default BarraDeBusqueda