import { Grid, TextField } from '@mui/material'
import React from 'react'

const ReservationForm = () => {
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
            name='nombre'
            type={'text'}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Apellido'
            name='apellido'
            type={'text'}
            fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Email'
            name='email'
            type={'email'}
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