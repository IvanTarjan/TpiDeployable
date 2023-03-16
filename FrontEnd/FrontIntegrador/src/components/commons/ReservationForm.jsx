import { Grid, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'

const ReservationForm = () => {
  return (
    < >
      <h1>Completá tus datos</h1>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            placeholder='Nombre'
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder='Apellido'
            fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder='Email'
            fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder='Ciudad'
            fullWidth />
        </Grid>
      </Grid>
    </>

  )
}

export default ReservationForm