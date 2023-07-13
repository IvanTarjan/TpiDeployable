import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, useMediaQuery } from '@mui/material';
import { AdminTableDeleteButton, AdminTableVerMasButton } from '../commons/AdminHomeTableHelpers';
import axios from 'axios';
import VehicleCard from '../commons/VehicleCard';
import styles from '../styles/Body.module.css'
import { useNavigate } from 'react-router-dom';
import { BodyContext } from '../contexts/BodyContext';

const AdminHome = () => {
    const navigate = useNavigate()
    const { apiUrl } = useContext(BodyContext);
    const [cars, setCars] = useState([])
    const isTabletOrMore = useMediaQuery('(min-width:900px)')

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nombre', headerName: 'Nombre', width: 130 },
        { field: 'precio', type: 'number', headerName: 'Precio', width: 130 },
        { field: 'categoria', headerName: 'Categoria', width: 80 },
        { field: 'ciudad', headerName: 'Ciudad', width: 80 },
        { field: 'pais', headerName: 'Pais', width: 80 },
        { field: 'puntuacion', type: "number", headerName: 'Puntos', width: 60 },
        , {
            field: "delete",
            headerName: "Delete",
            renderCell: (params) => <AdminTableDeleteButton endpoint={`${apiUrl}/api/producto`} id={params.id} arrayToFilter={setCars} />
        }
        , {
            field: "verMas",
            headerName: "Ver Mas",
            renderCell: (params) => <AdminTableVerMasButton id={params.id} />
        }
    ];

    useEffect(() => {
        axios.get(`${apiUrl}/api/producto`).then(res => {
            setCars(res.data)
            ;
        })
    }, [])

    const rows = cars.map(car => ({ id: car.id, nombre: car.titulo, precio: car.precio, categoria: car.categoria.titulo, ciudad: car.ubicacion.nombre, pais: car.ubicacion.pais, puntuacion: Number(car.puntuacionAvg)}));

    return (
        <div style={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "100px" , gap: "10px" }}>
            <Button variant='contained' fullWidth onClick={()=> navigate('/administration/newcar')}>Agregar Producto </Button>

            {isTabletOrMore ? <DataGrid
                autoHeight
                disableRowSelectionOnClick={true}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />

                :

                <div className={styles.homeContainer}>
                    {cars.map(car => (
                        <VehicleCard
                            key={car.id}
                            car={car}
                            setCars={setCars}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default AdminHome