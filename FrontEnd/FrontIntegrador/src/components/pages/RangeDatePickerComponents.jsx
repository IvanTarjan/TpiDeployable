import { Box, Button, Typography } from "@mui/material"
import { forwardRef } from "react"
import colors from "../styles/colors"
import EventIcon from '@mui/icons-material/Event';



export const CustomInput = forwardRef(({ value,  handleOpen }, ref) => (


    <Box sx={{ display: 'flex', width: {sx: '100%', lg:'500px'}, height: '40px', backgroundColor: colors.background, borderRadius: '5px', alignItems: 'center', color: value ? colors.c3 : colors.fuenteBarraBusqueda, paddingLeft: '7px', gap: '5px' }} onClick={handleOpen} ref={ref}>
        <EventIcon /><Typography fontWeight={600} variant='subtitle1'>{value ? value : 'Check in - Check out'}</Typography>
    </Box>
));

export const CustomHeader = ({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
}) => (
    <div>
        <button
            aria-label="Previous Month"
            className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
        >
            <span
                className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
            >
                {"<"}
            </span>
        </button>
        <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("Es-AR", {
                month: "long"
            })}
        </span>
        <button
            aria-label="Next Month"
            className={
                "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
        >
            <span
                className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
            >
                {">"}
            </span>
        </button>
    </div>
)
