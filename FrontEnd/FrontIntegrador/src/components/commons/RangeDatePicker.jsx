import React, { useState } from 'react'
import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import colors from '../styles/colors';
import { CustomInput, CustomHeader } from './RangeDatePickerComponents';
import es from 'date-fns/locale/es';

const RangeDatePicker = ({ dateRange, setDateRange }) => {
    const [startDate, endDate] = dateRange;
    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width:540px)');
    const isTablet = useMediaQuery('(max-width:700px)');
    registerLocale('es', es);
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <Box>
            <DatePicker
                customInput={<CustomInput handleOpen={handleOpen} />}
                renderCustomHeader={CustomHeader}
                open={open}
                showPopperArrow={false}
                fixedHeight={true}
                popperPlacement={isTablet ? "top-end" : "top-start"}
                popperModifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -5],
                            width: 800
                        }
                    }
                ]}
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                monthsShown={isMobile ? 1 : 2}
                dateFormat="dd 'de' MMM."
                onChange={(update) => {
                    setDateRange(update);
                }}
                shouldCloseOnSelect={false}
                locale="es"
                inline={false}
            >
                <Button sx={{ backgroundColor: colors.principal, color: colors.background, textTransform: 'none', width: isMobile ? '100%' : '215%', '&:hover': { backgroundColor: colors.principal } }}
                    onClick={handleOpen}
                >Aplicar</Button>
            </DatePicker>
        </Box>
    )
}

export default RangeDatePicker