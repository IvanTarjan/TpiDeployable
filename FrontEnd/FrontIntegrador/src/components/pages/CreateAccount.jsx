import React, { useContext, useState } from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from '../styles/CreateAccount.module.css';
import { HeaderContext } from "../contexts/HeaderContext";
import { Link, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";

const CreateAccount = () => {
  const { users, setUsers, setHeaderType } = useContext(HeaderContext)
  const [isSubmit, setIsSubmit] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const emailsList = users.map(user => user.email);
  const passwordsList = users.map(user => user.password);

  const nagivate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirm: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().min(3, "El nombre debe contener al menos 3 letras").required('Campo obligatorio'),
      surname: Yup.string().min(3, "El apellido debe tener al menos 3 letras").required('Campo obligatorio'),
      email: Yup.string().lowercase().email("Ingresar una direccion de email valida").notOneOf(emailsList, "El email ingresado se ya encuentra registrado").required('Campo obligatorio'),
      password: Yup.string().min(7, 'La contrasena debe tener mas de 6 caracteres').notOneOf(passwordsList, "La contrasena ingresada ya se encuentra registrada").required('Campo obligatorio'),
      confirm: Yup.string().label('Confirmar el password ingresado').oneOf([Yup.ref('password')], 'Las contrasenas deben ser iguales').required('Campo obligatorio')
    }),
    onSubmit: (data) => axios.post('http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/usuario', {
      nombre: data.name,
      // apellido: data.surname,
      email: data.email,
      password: data.confirm
    }).then(res => {
      setIsSubmit(prev => !prev)
      setUsers(preUsers => [...preUsers, {
        nombre: data.name,
        // apellido: data.surname,
        email: data.email,
        password: data.confirm
      }])
      nagivate('/login')
    }).catch(err => console.log(err))
  })

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <p className={styles.formTitle}>Crear cuenta</p>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }} >

          <Grid item xs={12} md={8}>
            <TextField
              value={values.name}
              onChange={handleChange}
              name='name'
              type={"text"}
              label="Nombre"
              variant="outlined"
              error={errors.name ? true : false}
              helperText={errors.name}
              fullWidth
            />

          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.surname}
              onChange={handleChange}
              name='surname'
              type={"text"}
              label="Apellido"
              variant="outlined"
              error={errors.surname ? true : false}
              helperText={errors.surname}
              fullWidth
            />

          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.email}
              onChange={handleChange}
              name='email'
              type={"email"}
              label="Correo electronico"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email}
              fullWidth
            />

          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              InputProps={{
                endAdornment: (
                  <IconButton disableRipple={true} onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              value={values.password}
              onChange={handleChange}
              name='password'
              type={showPassword ? "text" : "password"}
              label="Contrasena"
              variant="outlined"
              error={errors.password ? true : false}
              helperText={errors.password}
              fullWidth
            />

          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.confirm}
              onChange={handleChange}
              name='confirm'
              type={"password"}
              label="Confirmar contrasena"
              variant="outlined"
              error={errors.confirm ? true : false}
              helperText={errors.confirm}
              fullWidth
            />

          </Grid>

        </Grid>
        <Button size='large' color='primary' type='submit' variant='contained' endIcon={<SendIcon />}>Crear Cuenta</Button>
        <p className={styles.paragraph}>Ya tienes una cuenta? <Link to={'/login'} onClick={() => setHeaderType("login")} >Iniciar sesion</Link></p>
      </form>
    </div>
  )
}

export default CreateAccount