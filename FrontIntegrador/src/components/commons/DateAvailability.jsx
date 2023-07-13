import React, { useContext, useEffect, useRef, useState } from 'react';
import colors from '../commons/colors';
import { Calendar, DateObject, getAllDatesInRange } from "react-multi-date-picker"
import { BodyContext } from '../contexts/BodyContext';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { getDaysArray, hasOverlappingDays } from './datePickerHelpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderContext } from '../contexts/HeaderContext';

const DateAvailability = ({ dateRangeArr, id }) => {
  const calendarRef = useRef();
  const { dateRange, setDateRange, allDates, setAllDates } = useContext(BodyContext)
  const { isLog } = useContext(HeaderContext)
  const [disabledDays, setDisabledDays] = useState([])
  const navigator = useNavigate()
  const isMobile = useMediaQuery('(max-width:600px)');
  const location = useLocation()

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  useEffect(() => {
    let dayArr = [];
    dateRangeArr.forEach((range) => dayArr = dayArr.concat(getDaysArray(range[0], range[1])))
    setDisabledDays(dayArr);
  }, [])

  useEffect(() => {
    if (hasOverlappingDays(allDates, disabledDays)) {
      setDateRange([null, null])
      setAllDates([])
    }
  }, [allDates])

  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="flex-start" width={"107%"} bgcolor={"#ececef"} marginLeft="-3.5%" padding={"3.5%"}>
      <h1>Fechas Disponibles</h1>
      <Box display={"flex"} justifyContent="center" gap={{ xs: '10px', md: '50px', lg: '150px' }} width="100%" alignItems={"center"} flexDirection={{ xs: 'column', md: "row" }}>
        <Calendar
          ref={calendarRef}
          value={dateRange}
          onChange={dateObjects => {
            setDateRange(dateObjects)
            setAllDates(getAllDatesInRange(dateObjects))
          }}
          mapDays={({ date }) => {
            let isDisabled = disabledDays.includes(date.format("YYYY/M/D"))
            if (isDisabled) return {
              disabled: true,
              style: { color: "#ccc" },
            }
          }}
          months={months}
          hideYear={true}
          className="rmdp-mobile"
          weekDays={weekDays}
          minDate={new DateObject()}
          range
          rangeHover
          numberOfMonths={isMobile ? 1 : 2}
        />

        <Box width={{ xs: 'auto', md: "30%" }} minWidth="300px" display="flex" flexDirection={{ xs: 'column', sm: 'row', md: 'column' }} bgcolor={{ xs: "none", md: colors.background }} height="min-content" padding={"18px"} borderRadius="12px" boxShadow={{ xs: "none", md: "0px 3px 4px lightgray" }}>
          <Typography variant='subtitle2' fontWeight={600}>Agregá tus fechas de alquiler para obtener precios exactos</Typography>
          <Button onClick={() => isLog ?
            navigator(`/cars/${id}/reservation`) :
            navigator('/login', { state: location.pathname })
          }
            variant="contained"
            sx={{ textTransform: "none", color: colors.background, width: '100%' }}>Iniciar reserva</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DateAvailability