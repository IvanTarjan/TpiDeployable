import React, { useContext, useRef, useState } from 'react'
import { Typography, Box, useMediaQuery, MenuItem, FormControl, Select, OutlinedInput, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import colors from '../commons/colors';
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import { CustomInput } from '../commons/DatePickerCustomComponents';
import { BodyContext } from '../contexts/BodyContext';
import { useNavigate } from 'react-router-dom';

const BarraDeBusqueda = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:800px)');
    const [location, setLocation] = useState({});
    const calendarRef = useRef();
    const navigate = useNavigate()

    const { localizaciones, setSelectedCity, setAllDates , dateRange, setDateRange } = useContext(BodyContext)

    const handleChange = (event) => {
        setLocation(localizaciones[event.target.value]);
    }

    const handleSubmit = () => {
        setSelectedCity(location)
        if (dateRange[1] != null || location != null) {
            navigate(`/results/${dateRange[0]?dateRange[0].format("YYYY-MM-DD"):"n"}/${dateRange[0]?dateRange[1].format("YYYY-MM-DD"):"n"}/${location.id ??"n"}`);
        } else {
            alert("Hay que seleccionar una fecha y una ciudad");
        }
        
    }

    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    return (
        <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' width='100%' marginTop={'60px'} backgroundColor={colors.c3} padding={"30px 0px"}>
            <Typography variant='h1' fontSize={{ xs: '30px', md: '36px' }} fontWeight="bold" color={colors.c4} textAlign="center" padding={'20px'} >Encontra el vehiculo ideal para tu proximo viaje</Typography>

            <FormControl sx={{ m: 1, width: { xs: '90%', md: '70%' }, mt: 3, display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: { xs: 'column', sm: 'row' }, gap: '10px' }}>
                <Select
                    id='selectLocalizacion'
                    displayEmpty
                    sx={{ width: { xs: '100%', sm: '37.5%' }, height: '40px', backgroundColor: colors.background, borderRadius: '5px' }}
                    defaultValue=""
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {

                        return <Box sx={{ display: 'flex', alignItems: 'center', color: selected === "" ? colors.fuenteBarraBusqueda : colors.c3, gap: '5px' }}>
                            <LocationOnIcon fontSize='medium' />
                            {selected === "" ? <Typography fontWeight={600} variant='subtitle1'>¿A dónde vamos?</Typography> :
                                <Typography fontWeight={600} variant='subtitle1'>{location.nombre}, {location.pais}</Typography>}
                        </Box>;
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {localizaciones.map((locali, i) => (
                        <MenuItem value={i} key={i} >
                            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: `1.5px solid ${colors.principal}`, gap: '15px', padding: '5px', width: "100%" }}>
                                <LocationOnOutlinedIcon fontSize='medium' />
                                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' color={colors.c3} >
                                    <Typography variant='subtitle2' fontWeight={'600'} color={'black'}>{locali.nombre}</Typography>
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
                    hideYear={true}
                    onChange={dateObjects => {
                        setDateRange(dateObjects)
                        setAllDates(getAllDatesInRange(dateObjects))
                    }}
                    months={months}
                    weekDays={weekDays}
                    minDate={new DateObject()}
                    range
                    render={<CustomInput />}
                    arrow={false}
                    offsetY={6}
                    numberOfMonths={isMobile ? 1 : 2}
                >
                    <Box position="bottom" display={'flex'} justifyContent={isTablet ? 'center' : 'flex-end'} >
                        <Button onClick={() => calendarRef.current.closeCalendar()} sx={{ backgroundColor: colors.principal, color: colors.c4, width: isTablet ? '95%' : '35%', margin: '10px', textTransform: 'none', fontWeight: '600', '&:hover': { backgroundColor: colors.principal } }}>
                            Aplicar
                        </Button>
                    </Box>
                </DatePicker>

                <Button sx={{ backgroundColor: colors.principal, color: colors.background, textTransform: 'none', width: { xs: '100%', sm: '25%' }, height: '40px', '&:hover': { backgroundColor: colors.principal } }}
                    onClick={handleSubmit}>
                    Buscar
                </Button>
            </FormControl>
        </Box>
    )
}

export default BarraDeBusqueda