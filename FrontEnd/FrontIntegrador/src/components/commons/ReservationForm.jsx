import { Grid, TextField } from '@mui/material'
import React from 'react'

const ReservationForm = ({ loggedUser }) => {
  return (
    < >
      <h1>Completá tus datos</h1>

      <Grid sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '10px',
        marginLeft: '10px',
        width: '100%'

      }} container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label='Nombre'
            name={loggedUser.nombre}
            type={'text'}
            value={loggedUser.nombre}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Apellido'
            name={loggedUser.userName}
            type={'text'}
            value={loggedUser.userName}
            fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Email'
            name={loggedUser.email}
            type={'email'}
            value={loggedUser.email}
            fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Ciudad'
            name='ciudad'
            type={'text'}
            fullWidth />
        </Grid>
      </Grid>
    </>

  )
}

export default ReservationForm