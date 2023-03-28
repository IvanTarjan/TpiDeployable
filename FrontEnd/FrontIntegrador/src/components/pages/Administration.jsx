import React, { useContext } from 'react'
import { HeaderContext } from '../contexts/HeaderContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddCarForm from '../commons/AddCarForm';

const Administration = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Administracion</h1>
        </div>
        <IconButton disableRipple={true} sx={{ width: 175 }} onClick={handleClick} >
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>
      <AddCarForm />
    </>
  )
}

export default Administration