import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import logo from '../../assets/logo.svg'
import { HeaderContext } from '../contexts/HeaderContext'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const { headerType, setHeaderType } = useContext(HeaderContext);
  const nagivate = useNavigate()
  const handleCreateAccount = () => {
    setHeaderType('createAccount')
    nagivate('/register')
  }
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} />
        <p>Viaja como quieras</p>
      </div>

      {
        headerType === 'initial' ? <div className={styles.btnContainer}>
          <button onClick={handleCreateAccount}>Crear cuenta</button>
          <button className={styles.btnFilter}>Iniciar sesion</button>
        </div> :
          <div className={styles.btnContainer}>
            <button className={styles.btnFilter}>Iniciar sesion</button>
          </div>
      }
    </div>
  )
}

export default Header