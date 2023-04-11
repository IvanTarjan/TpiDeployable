import React, { useContext, useEffect, useState } from 'react'
import { Button, FormHelperText, Grid, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import styles from '../styles/Body.module.css'
import SendIcon from '@mui/icons-material/Send';
import { BodyContext } from '../contexts/BodyContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { HeaderContext } from '../contexts/HeaderContext';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ciudades from './ciudades'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(attribute, attributeName, theme) {
  return {
    fontWeight:
      attributeName.indexOf(attribute) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const AddCarForm = () => {

  const { categorias, localizaciones } = useContext(BodyContext)
  const { currentUser } = useContext(HeaderContext)
  const [attributeName, setAttributeName] = useState([]);
  const [attributes, setAttributes] = useState([])
  const theme = useTheme();
  const nagivate = useNavigate()

  const getLatAndLon = (id) => {
    for (let i = 0; i < ciudades.length; i++) {
      if (ciudades[i].id == id) {
        return [ciudades[i].lat, ciudades[i].lon]
      }
    }
  }

  useEffect(() => {
    axios.get('http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/caracteristica')
      .then(res => setAttributes(res.data.map(item => item.titulo)))
      .catch(err => console.log(err))
  }, [])

  const handleAttributesChange = (event) => {
    const {
      target: { value },
    } = event;
    setAttributeName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: 0,
      city: '',
      description: '',
      house: '',
      safety: '',
      cancel: '',
      mainPhoto: '',
      sidePhoto: '',
      rearPhoto: '',
      trunkPhoto: '',
      insidePhoto: '',
      allAttributes: attributeName
    },
    validateOnChange: true,
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obligatorio'),
      category: Yup.string().required('Campo obligatorio'),
      price: Yup.number().required('Campo obligatorio').positive('El precio debe ser un numero positivo'),
      city: Yup.string().required('Campo obligatorio'),
      description: Yup.string().required('Campo obligatorio'),
      house: Yup.string().required('Campo obligatorio'),
      safety: Yup.string().required('Campo obligatorio'),
      cancel: Yup.string().required('Campo obligatorio'),
      mainPhoto: Yup.string().url('Debe incluirse url valida').required('Debe cargar foto principal'),
      sidePhoto: Yup.string().url('Debe incluirse url valida').required('Debe cargar foto lateral'),
    }),
    onSubmit: (data) => axios.post('http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/producto', {
      titulo: data.name,
      latitud: getLatAndLon(data.city)[0],
      longitud: getLatAndLon(data.city)[1],
      descripcion: data.description,
      precio: data.price,
      imagen:
        [{
          titulo: 'Main',
          url_img: data.mainPhoto
        },
        {
          titulo: 'Atras',
          url_img: data.rearPhoto
        },
        {
          titulo: 'Baul',
          url_img: data.trunkPhoto
        },
        {
          titulo: 'Interior',
          url_img: data.insidePhoto
        },
        {
          titulo: 'Side',
          url_img: data.sidePhoto
        }],
      politica: [
        {
          titulo: 'Normas de la casa',
          descripcion: data.house
        },
        {
          titulo: 'Salud y Seguridad',
          descripcion: data.safety
        },
        {
          titulo: 'Politica de cancelacion',
          descripcion: data.cancel
        }
      ],
      categoria:
      {
        id: data.category
      },
      ubicacion:
      {
        id: data.city
      },
      caracteristica: [
        {
          id: 1
        },
        {
          id: data.allAttributes.includes("Diesel premium") ? 2 : 8,
        },
        {
          id: 6,
        },
        {
          id: data.allAttributes.includes("Caja Automatica") ? 5 : 4,
        },
        {
          id: 7
        }
      ]
    },
      {
        headers: {
          'Authorization': `${currentUser.tokenType} ${currentUser.accessToken}`
        }
      }
    ).then(res => {
      Swal.fire({
        title: 'Registro exitoso!',
        text: 'El vehiculo creado ha sido cargado al home',
        icon: 'success',
        confirmButtonColor: '#1DBEB4',
        timer: 3000
      })
      nagivate('/')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }).catch(err => {
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: 'Lamentablemente hubo un problema en el proceso. Por favor intente más tarde',
        icon: 'error',
        confirmButtonColor: '#1DBEB4',
      })
    })
  })

  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <div className={styles.addCar}>
      <form onSubmit={handleSubmit} >
        <h1>Crear vehiculo</h1>

        <Grid sx={{
          backgroundColor: 'white',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          padding: '10px 20px',
          width: '100%',
          height: 'auto'
        }} container spacing={2}>
          <Grid item xs={isMobile ? 12 : 6}>
            <TextField
              label='Nombre del vehiculo'
              type={'text'}
              name='name'
              value={values.name}
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <Select
              defaultValue={''}
              fullWidth
              name='category'
              value={values.category}
              onChange={handleChange}
              error={errors.category ? true : false}
              helperText={errors.category}
            >
              <MenuItem value="">
                <em style={{ color: '#383B58', fontWeight: '700' }}>Categoria</em>
              </MenuItem>
              {categorias.map(item => (
                <MenuItem key={item.id} value={item.id} >{item.titulo}</MenuItem>
              ))}

            </Select>
            <FormHelperText>Categoria del vehiculo</FormHelperText>

          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <TextField
              label='Precio'
              value={values.price}
              placeholder='$'
              name='price'
              onChange={handleChange}
              error={errors.price ? true : false}
              helperText={errors.price}
              type={'number'}
              fullWidth />
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <Select
              defaultValue={''}
              fullWidth
              name='city'
              value={values.city}
              onChange={handleChange}
              error={errors.city ? true : false}
              helperText={errors.city}
            >
              <MenuItem value="">
                <em style={{ color: '#383B58', fontWeight: '700' }}>Ciudad</em>
              </MenuItem>
              {localizaciones.map(item => (
                <MenuItem key={item.id} value={item.id} >{item.nombre}</MenuItem>
              ))}

            </Select>
            <FormHelperText>Ciudad</FormHelperText>
          </Grid>
          <Grid item xs={isMobile ? 12 : 12}>
            <TextField
              label="Descripcion"
              name='description'
              value={values.description}
              onChange={handleChange}
              error={errors.description ? true : false}
              helperText={errors.description}
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
          padding: '10px 20px',
          width: '100%',
          height: 'auto'
        }}
          container spacing={2} >
          <Grid item xs={isMobile ? 12 : 12}>

            <InputLabel id="demo-multiple-chip-label">Atributos</InputLabel>
            <Select
              fullWidth
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              name='allAttributes'
              value={attributeName}
              onChange={handleAttributesChange}
              input={<OutlinedInput id="select-multiple-chip" label="Atributos" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {attributes.map((attribute) => (
                <MenuItem
                  key={attribute}
                  value={attribute}
                  style={getStyles(attribute, attributeName, theme)}
                >
                  {attribute}
                </MenuItem>
              ))}
            </Select>


          </Grid>
        </Grid >

        <h1>Politicas del Producto</h1>
        <Grid sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          padding: '10px 20px',
          width: '100%',
          height: 'auto'
        }}
          container spacing={2} >
          <Grid item xs={isMobile ? 12 : 4}>
            <TextField
              label='Normas de la casa'
              name='house'
              value={values.house}
              onChange={handleChange}
              error={errors.house ? true : false}
              helperText={errors.house}
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
              name='safety'
              value={values.safety}
              onChange={handleChange}
              error={errors.safety ? true : false}
              helperText={errors.safety}
              multiline
              minRows={8}
              placeholder='Escriba aqui'
              type={'text'}
              fullWidth />
          </Grid>

          <Grid item xs={isMobile ? 12 : 4}>
            <TextField
              label='Politica de cancelacion'
              name='cancel'
              value={values.cancel}
              onChange={handleChange}
              error={errors.cancel ? true : false}
              helperText={errors.cancel}
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
            padding: '10px 20px',
            width: '100%',
            height: 'auto'
          }}
            container spacing={2} >

            <Grid item xs={isMobile ? 12 : 8}>
              <TextField
                label='Foto principal'
                name='mainPhoto'
                value={values.mainPhoto}
                onChange={handleChange}
                error={errors.mainPhoto ? true : false}
                helperText={errors.mainPhoto}
                placeholder='Insertar https://'
                type={'text'}
                fullWidth />
            </Grid>

            <Grid item xs={isMobile ? 12 : 4}>
              <TextField
                label='Lateral'
                name='sidePhoto'
                value={values.sidePhoto}
                onChange={handleChange}
                error={errors.sidePhoto ? true : false}
                helperText={errors.sidePhoto}
                placeholder='Insertar https://'
                type={'text'}
                fullWidth />
            </Grid>

            <Grid item xs={isMobile ? 12 : 4}>
              <TextField
                label='Vista posterior'
                name='rearPhoto'
                value={values.rearPhoto}
                onChange={handleChange}
                error={errors.rearPhoto ? true : false}
                helperText={errors.rearPhoto}
                placeholder='Insertar https://'
                type={'text'}
                fullWidth />
            </Grid>

            <Grid item xs={isMobile ? 12 : 4}>
              <TextField
                label='Baulera'
                name='trunkPhoto'
                value={values.trunkPhoto}
                onChange={handleChange}
                error={errors.trunkPhoto ? true : false}
                helperText={errors.trunkPhoto}
                placeholder='Insertar https://'
                type={'text'}
                fullWidth />
            </Grid>

            <Grid item xs={isMobile ? 12 : 4}>
              <TextField
                label='Interior'
                name='insidePhoto'
                value={values.insidePhoto}
                onChange={handleChange}
                error={errors.insidePhoto ? true : false}
                helperText={errors.insidePhoto}
                placeholder='Insertar https://'
                type={'text'}
                fullWidth />
            </Grid>

          </Grid >
          <Grid item xs={isMobile ? 12 : 12} sx={{ display: 'flex', justifyContent: 'center' }} >
            <Button type='submit' sx={{ marginBottom: '130px', width: '450px', marginTop: '30px' }} size='large' color="primary" variant='contained' endIcon={<SendIcon />}>Crear</Button>
          </Grid>
        </Grid >
      </form>
    </div >
  )
}

export default AddCarForm