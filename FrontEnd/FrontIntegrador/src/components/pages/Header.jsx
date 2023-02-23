import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import logo from '../../assets/logo.svg'
import { HeaderContext } from '../contexts/HeaderContext'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton, useMediaQuery } from '@mui/material'
import Hamburguer from '../commons/Hamburguer'


const Header = () => {

  const { headerType, setHeaderType, users, isLog, setIsLog, currentUser } = useContext(HeaderContext);

  let loggedUser = users.find(user => user.email === currentUser);

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

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer} onClick={handleLogoClick} >
        <img src={logo} />
        <p className={styles.travel}>Viaja como quieras</p>
      </div>

      {isLog ? <div className={styles.avatarContainer}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500], fontWeight: 700, height: { xs: 38, md: 48, lg: 48 }, width: { xs: 38, md: 48, lg: 48 } }}>{loggedUser.name[0]} {loggedUser.surname[0]}</Avatar>
        </Stack>
        <div>
          <p>Hola, </p>
          <span>{isMobile ? loggedUser.name : loggedUser.name + ' ' + loggedUser.surname}</span>
        </div>
        <IconButton disableRipple='false' onClick={handleSignOut} >
          <PowerSettingsNewIcon fontSize='large' />
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
      <div className={styles.hamburger}>
        <Hamburguer />
      </div>
    </div>
  )
}

export default Header