import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import logo from '../../assets/logo.svg'
import { HeaderContext } from '../contexts/HeaderContext'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton } from '@mui/material'


const Header = () => {

  const { headerType, setHeaderType, newUser, isLog, setIsLog } = useContext(HeaderContext);

  const nagivate = useNavigate()

  const handleCreateAccount = () => {
    setHeaderType('createAccount')
    nagivate('/register')
  }

  const handleLogin = () => {
    setHeaderType('login')
    nagivate('/login')
  }

  const handleLogoClick = () => {
    nagivate('/')
    setHeaderType('initial')
  }

  const handleSignOut = () => {
    setIsLog(prev => !prev)
    setHeaderType('initial')
  }


  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer} onClick={handleLogoClick} >
        <img src={logo} />
        <p>Viaja como quieras</p>
      </div>

      {newUser != null && isLog ? <div className={styles.avatarContainer}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500], fontWeight: 700, height: 48, width: 48 }}>{newUser.name[0]} {newUser.surname[0]}</Avatar>
        </Stack>
        <div>
          <p>Hola, </p>
          <span>{newUser.name} {newUser.surname}</span>
        </div>
        <IconButton disableRipple='false' onClick={handleSignOut} >
          <PowerSettingsNewIcon />
        </IconButton>
      </div> :
        headerType === 'initial' ?
          <div className={styles.btnContainer}>
            <button onClick={handleCreateAccount}>Crear cuenta</button>
            <button onClick={handleLogin} className={styles.btnFilter}>Iniciar sesion</button>
          </div> :
          headerType === 'createAccount' ?
            <div className={styles.btnContainer}>
              <button onClick={handleLogin} className={styles.btnFilter}>Iniciar sesion</button>
            </div> :
            <div className={styles.btnContainer}>
              <button onClick={handleCreateAccount}>Crear cuenta</button>
            </div>
      }
    </div>
  )
}

export default Header