import { Box, Typography } from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import ClearIcon from '@mui/icons-material/Clear';
import colors from "./colors";
import { DateObject } from "react-multi-date-picker";
import { useContext } from "react";
import { BodyContext } from "../contexts/BodyContext";

export const CustomInput = ({value, openCalendar}) => {

    let startDate = new DateObject(value[0]).format("DD de MMM.", ["de"])
    let endDate = new DateObject(value[1]).format("DD de MMM.", ["de"])

    const {setAllDates , setDateRange } = useContext(BodyContext)

    const handleClick = () => {
        setAllDates([])
        setDateRange([null, null])
    }

    return(
        <Box onClick={openCalendar} height={"40px"} bgcolor={colors.background} borderRadius="5px" display={"flex"} justifyContent="space-between" alignItems={"center"} gap="5px" paddingLeft={"8px"} color={value[0] && value[1]?colors.c3 : colors.fuenteBarraBusqueda}>
            <Box display={"flex"}>
            <EventIcon fontSize="medium"/>
            <Typography fontWeight={600} variant='subtitle1'>{value[0] && value[1]? `${startDate} - ${endDate}`: "Check In - Check Out"}</Typography>
            </Box>
            <ClearIcon fontSize="medium" sx={{justifySelf: "flex-end", marginRight: "7px"}} onClick={handleClick}/>
        </Box>
    )
}