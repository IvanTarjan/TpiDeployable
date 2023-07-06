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
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import { BodyContext } from "../contexts/BodyContext";

const CreateAccount = () => {
  const { setHeaderType } = useContext(HeaderContext)
  const [isSubmit, setIsSubmit] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const { apiUrl } = useContext(BodyContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      confirm: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().min(3, "El nombre debe contener al menos 3 letras").required('Campo obligatorio'),
      surname: Yup.string().min(3, "El apellido debe tener al menos 3 letras").required('Campo obligatorio'),
      email: Yup.string().lowercase().email("Ingresar una direccion de email valida").required('Campo obligatorio'),
      password: Yup.string().min(7, 'La contrasena debe tener mas de 6 caracteres').required('Campo obligatorio'),
      confirm: Yup.string().label('Confirmar el password ingresado').oneOf([Yup.ref('password')], 'Las contrasenas deben ser iguales').required('Campo obligatorio')
    }),
    onSubmit: (data) => axios.post(`${apiUrl}/api/auth/register`, {
      nombre: data.name,
      apellido: data.surname,
      userName: data.username,
      email: data.email,
      password: data.confirm
    }).then(res => {
      setIsSubmit(prev => !prev)

      Swal.fire({
        title: 'Registro exitoso!',
        text: 'Solo falta que verifiques tu mail.',
        icon: 'success',
        confirmButtonColor: '#1DBEB4',
        timer: 3000
      })
      emailjs.send("service_v1b8o5l", "template_0dj2e4x", {
        to_name: data.name,
        email: data.email,
        username: data.username,
      }, "-ySqEDR_MnfGZnEMc").catch(() => {
        axios.get(`${apiUrl}/api/auth/verificarUsuario/${data.username}`)
        Swal.fire({
          title: 'Nos quedamos sin cartas (presupuesto de la api)',
          text: 'Pero no te preocupes, te habilitamos tu cuenta igual',
          icon: 'success',
          confirmButtonColor: '#1DBEB4',
          timer: 3000
        })
      })
      navigate("/login")
    }).catch(err => {
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: 'Lamentablemente no ha podido registrarse. Por favor intente más tarde',
        icon: 'error',
        confirmButtonColor: '#1DBEB4',
      })
    })
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
              value={values.username}
              onChange={handleChange}
              name='username'
              type={"text"}
              label="Username"
              variant="outlined"
              error={errors.username ? true : false}
              helperText={errors.username}
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