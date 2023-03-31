import React, { useContext, useEffect } from 'react'
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

  const { headerType, setHeaderType, isLog, setIsLog, currentUser, setCurrentUser } = useContext(HeaderContext);

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
    setIsLog(false)
    setHeaderType('initial')
    nagivate('/')
    localStorage.removeItem('currentUser');
    setCurrentUser(undefined)
    localStorage.removeItem('currentUser')
  }

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer} onClick={handleLogoClick} >
        <img src={logo} />
        <p className={styles.travel}>Viaja como quieras</p>
      </div>

      {isLog ? <div className={styles.avatarContainer}>
        {currentUser.role.includes('ROLE_ADMIN') && <span style={{ color: '#545776', fontSize: '16px' }}>Administracion <span style={{ fontSize: '40px', padding: '0px 40px' }}>|</span></span>}
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500], fontWeight: 700, height: { xs: 38, md: 48, lg: 48 }, width: { xs: 38, md: 48, lg: 48 } }}>{currentUser.nombre[0].toUpperCase()} </Avatar>
        </Stack>
        <div>
          <p>Hola, {currentUser.nombre[0].toUpperCase() + currentUser.nombre.slice(1)}</p>
          <span>{isMobile ? currentUser.name : currentUser.name}</span>
        </div>
        <IconButton sx={{ width: '48px' }} disableRipple={false} onClick={handleSignOut} >
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