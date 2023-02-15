import React from 'react'
import styles from '../styles/Header.module.css'
import logo from '../../assets/logo.svg'


const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} />
        <p>Viaja como quieras</p>

      </div>

      <div className={styles.btnContainer}>
        <button>Crear cuenta</button>
        <button className={styles.btnFilter}>Iniciar sesion</button>
      </div>
    </div>
  )
}

export default Header