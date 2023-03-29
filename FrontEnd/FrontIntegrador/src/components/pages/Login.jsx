import React, { useContext, useEffect, useState } from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from '../styles/Login.module.css';
import { HeaderContext } from "../contexts/HeaderContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'

const Login = () => {
  const { users, setHeaderType, setIsLog, currentUser, setCurrentUser } = useContext(HeaderContext)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const emailsList = users.map(user => user.email);
  const passwordsList = users.map(user => user.password);

  useEffect(() => {
    if (location.state === 'fromDetails') {
      Swal.fire({
        text: 'Para realizar una reserva necesitas estar logueado',
        icon: 'warning',
        color: '#FF0000',
        background: '#fae0e0',
        iconColor: 'red',
        showConfirmButton: false,
        timer: 3000
      })
    }
  }, [])

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email("Ingresar una direccion de email valida").oneOf(emailsList, "El email ingresado no es valido").required('Campo obligatorio'),
      password: Yup.string().oneOf(passwordsList, "El password ingresado no es valido").required('Campo obligatorio'),
    }),
    onSubmit: (data) => {
      setIsLog(prev => !prev)
      const loggedUser = users.find(user => user.email === data.email);
      setCurrentUser(loggedUser)
      if (loggedUser.email === 'emi@gmail.com') {
        navigate('/administration')
      } else {
        navigate('/')
      }
    }
  })

  return (
    <div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <p className={styles.formTitle}>Iniciar sesion</p>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }} >

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

        </Grid>
        <Button size='large' color="primary" type='submit' variant='contained' endIcon={<SendIcon />}>Ingresar</Button>
        <p className={styles.paragraph}>Aun no tenes cuenta? <Link to={'/register'} onClick={() => setHeaderType("createAccount")} >Registrate</Link></p>
      </form>
    </div>
  )
}

export default Login