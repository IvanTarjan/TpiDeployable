import React from 'react'
import styles from '../styles/Footer.module.css'
import { Box, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>©2023 Digital Booking</p>
      <Box className={styles.logoContainer}>
        <Link href="#"><FacebookIcon fontSize='large' color='action' /></Link>
        <Link href="#"><LinkedInIcon fontSize='large' color='action' /></Link>
        <Link href="#"><TwitterIcon fontSize='large' color='action' /></Link>
        <Link href="#"><InstagramIcon fontSize='large' color='action' /></Link>
      </Box>
    </div>
  )
}

export default Footer