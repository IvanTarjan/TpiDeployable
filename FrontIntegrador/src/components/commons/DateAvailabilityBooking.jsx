import React, { useContext, useEffect, useRef, useState } from 'react';
import colors from '../commons/colors';
import { Calendar, DateObject, getAllDatesInRange } from "react-multi-date-picker"
import { BodyContext } from '../contexts/BodyContext';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { getDaysArray, hasOverlappingDays } from './datePickerHelpers';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { HeaderContext } from '../contexts/HeaderContext';

const DateAvailabilityBooking = ({ dateRangeArr, id }) => {
  const calendarRef = useRef();
  const { dateRange, setDateRange, allDates, setAllDates } = useContext(BodyContext)
  const { isLog } = useContext(HeaderContext)
  const [disabledDays, setDisabledDays] = useState([])
  const navigator = useNavigate()
  const isMobile = useMediaQuery('(max-width:600px)');

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
    <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="start" width={"100%"} padding={"0px 40px 40px"}>
      <h1>Seleccioná tu fecha de reserva</h1>
      <Box display={"flex"} justifyContent="center" width="100%" alignItems={"center"} flexDirection={{ xs: 'column', md: "row" }}>
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
          numberOfMonths={isMobile ? 1 : 3}
        />
      </Box>
    </Box>
  )
}

export default DateAvailabilityBooking