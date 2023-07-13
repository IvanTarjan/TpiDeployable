import React, { useContext } from 'react'
import { HeaderContext } from '../contexts/HeaderContext'
import styles from '../styles/Body.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const Administration = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <Box>
      <div className={styles.headerCategory}>
        <div>
          <h1 style={{ paddingTop: '0' }}>Administracion</h1>
        </div>
        <IconButton disableRipple={true} onClick={handleClick} >
          <ArrowBackIosNewIcon fontSize='large' color='action' />
        </IconButton>
      </div>
      <Outlet/>
      </Box>
  )
}

export default Administration