import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { useNavigate } from "react-router-dom";

export const AdminTableDeleteButton = ({ endpoint, id , arrayToFilter}) => {

    const {  currentUser } = useContext(HeaderContext);
    

    const handleDelete = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: 'Esta accion es irreversible',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${endpoint}/${id}`, {
                    headers: {
                      'Authorization': `${currentUser.tokenType} ${currentUser.accessToken}`
                    }
                  }).then(res=>{
                    Swal.fire({
                        title: 'Se borro la fila', 
                        icon: 'success',
                        timer: '500', 
                        timerProgressBar: true
                    })
                    arrayToFilter(prev=> prev.filter(p=> p.id != id))
                })
            }
        })
    }

    return (
        <IconButton onClick={handleDelete}><DeleteIcon fontSize="large" /></IconButton>
    )

}

export const AdminTableVerMasButton = ({id}) =>{

    const navigate = useNavigate()

    return (
        <IconButton onClick={()=> navigate(`/car/${id}`)}><VisibilityIcon fontSize="large"/></IconButton>
    )

}