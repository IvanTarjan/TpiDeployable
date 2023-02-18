import React, { useContext, useState } from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from '../styles/Login.module.css';
import { HeaderContext } from "../contexts/HeaderContext";
import { Link, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const { users, setHeaderType, setIsLog } = useContext(HeaderContext)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ingresar una direccion de email valida").matches(users[0].email, 'El email ingresado no se encuentra en nuestra base de datos.').required('Campo obligatorio'),
      password: Yup.string().matches(users[0].password, 'Por favor vuelva a intentarlo, sus credenciales son invalidas').required('Campo obligatorio'),
    }),
    onSubmit: (data) => {
      setIsLog(prev => !prev)
      navigate('/')
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
              error={errors.email}
              helperText={errors.email}
              fullWidth
            />

          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              InputProps={{
                endAdornment: (
                  <IconButton disableRipple='false' onClick={handleClickShowPassword}>
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
              error={errors.password}
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