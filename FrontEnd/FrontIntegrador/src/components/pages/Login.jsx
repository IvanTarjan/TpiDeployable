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
import axios from "axios";

const Login = () => {
  const { setHeaderType, setIsLog, currentUser, setCurrentUser } = useContext(HeaderContext)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      email: Yup.string().required('Campo obligatorio'),
      password: Yup.string().required('Campo obligatorio'),
    }),
    onSubmit: (data) => {
      setIsLog(prev => !prev)
      axios.post('http://ec2-3-138-67-153.us-east-2.compute.amazonaws.com:8080/api/auth/login', {
        userNameOrEmail: data.email,
        password: data.password
      }).then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res.data))
      })
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
              type={"text"}
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