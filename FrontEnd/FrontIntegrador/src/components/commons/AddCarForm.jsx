import React, { useContext } from 'react'
import { Button, FormHelperText, Grid, IconButton, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import styles from '../styles/Body.module.css'
import SendIcon from '@mui/icons-material/Send';
import { BodyContext } from '../contexts/BodyContext';

const AddCarForm = () => {

  const { categorias, localizaciones } = useContext(BodyContext)

  let carCategory = document.querySelector('#categoria')
  let carCity = document.querySelector('#ciudad')

  const isMobile = useMediaQuery('(max-width:640px)');

  const handleAddIcon = () => {
    console.log('Agregando icono')
  }
  return (
    <div className={styles.addCar}>
      <h1>Crear vehiculo</h1>

      <Grid sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '0px 10px',
        width: '100%',
        height: isMobile ? '500px' : '42vh'
      }} container spacing={2}>
        <Grid item xs={isMobile ? 12 : 6}>
          <TextField
            label='Nombre del vehiculo'
            type={'text'}
            fullWidth
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <Select
            defaultValue={''}
            fullWidth
            id='categoria'

          >
            <MenuItem value="">
              <em style={{ color: '#383B58', fontWeight: '700' }}>Categoria</em>
            </MenuItem>
            {categorias.map(item => (
              <MenuItem key={item.id} value={item.titulo} >{item.titulo}</MenuItem>
            ))}

          </Select>
          <FormHelperText>Categoria del vehiculo</FormHelperText>

        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <TextField
            label='Direccion'
            type={'text'}
            fullWidth />
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <Select
            defaultValue={''}
            fullWidth
            id='ciudad'
          >
            <MenuItem value="">
              <em style={{ color: '#383B58', fontWeight: '700' }}>Ciudad</em>
            </MenuItem>
            {localizaciones.map(item => (
              <MenuItem key={item.id} value={item.nombre} >{item.nombre}</MenuItem>
            ))}

          </Select>
          <FormHelperText>Ciudad</FormHelperText>
        </Grid>
        <Grid item xs={isMobile ? 12 : 12}>
          <TextField
            label="Descripcion"
            placeholder='Escriba aqui'
            multiline
            type={'text'}
            minRows={3}
            fullWidth
          />
        </Grid>
      </Grid>

      <h1>Agregar atributos</h1>
      <Grid sx={{
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '0px 10px',
        width: '100%',
        height: isMobile ? "155px" : '12vh'
      }}
        container spacing={2} >
        <Grid item xs={isMobile ? 12 : 6}>
          <TextField
            label='Nombre'
            type={'text'}
            fullWidth
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <TextField
            InputProps={{
              endAdornment: (
                <IconButton color='primary' disableRipple={true} onClick={handleAddIcon}>
                  <AddBoxIcon style={{ fontSize: '40px' }} />
                </IconButton>
              ),
            }}
            label='Icono'
            type={'text'}
            fullWidth />
        </Grid>
      </Grid >

      <h1>Politicas del Producto</h1>
      <Grid sx={{
        backgroundColor: '#fff',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: '0px 10px',
        width: '100%',
        height: isMobile ? '710px' : '32vh'
      }}
        container spacing={2} >
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label='Normas de la casa'
            multiline
            minRows={8}
            placeholder='Escriba aqui'
            type={'text'}
            fullWidth
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label='Salud y Seguridad'
            multiline
            minRows={8}
            placeholder='Escriba aqui'
            type={'text'}
            fullWidth />
        </Grid>

        <Grid item xs={isMobile ? 12 : 4}>
          <TextField
            label='Politica de cancelacion'
            multiline
            minRows={8}
            placeholder='Escriba aqui'
            type={'text'}
            fullWidth />
        </Grid>

        <h1>Cargar imagenes</h1>
        <Grid sx={{
          backgroundColor: '#f9f9f9',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          padding: '0px 20px',
          width: '100vw',
          height: '12vh'
        }}
          container spacing={2} >

          <Grid item xs={isMobile ? 12 : 12}>
            <TextField
              InputProps={{
                endAdornment: (
                  <IconButton color='primary' disableRipple={true} onClick={handleAddIcon}>
                    <AddBoxIcon style={{ fontSize: '40px' }} />
                  </IconButton>
                ),
              }}
              label='Insertar https://'
              type={'text'}
              fullWidth />
          </Grid>
        </Grid >
        <Grid item xs={isMobile ? 12 : 12} sx={{ display: 'flex', justifyContent: 'center' }} >
          <Button sx={{ marginBottom: '130px', width: '450px', marginTop: '30px' }} size='large' color="primary" type='submit' variant='contained' endIcon={<SendIcon />}>Crear</Button>
        </Grid>
      </Grid >
    </div >
  )
}

export default AddCarForm