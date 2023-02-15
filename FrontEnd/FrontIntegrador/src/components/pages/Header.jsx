import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../../assets/logo.svg'


const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} />
        <h2>Viaja como quieras</h2>

      </div>

      <div className={styles.btnContainer}>
        <button>Crear cuenta</button>
        <button>Iniciar sesion</button>
      </div>
    </div>
  )
}

export default Header