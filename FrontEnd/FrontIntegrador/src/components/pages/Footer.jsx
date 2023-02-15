import React from 'react'
import styles from '../styles/Footer.module.css'
import { Typography, Box, useMediaQuery} from '@mui/material'
import colors from '../styles/colors'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  
  const isMobile = useMediaQuery('(max-width:540px)');

  return (
    <footer style={{position: 'absolute', bottom: '0px' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' backgroundColor={colors.principal} width="100vw" padding={isMobile? "20px 30px" :"20px 50px"}>
        <Typography variant='h6' color={colors.c4} fontWeight={600}>©2023 Digital Booking</Typography>

        <Box display={isMobile?'none':'flex'} justifyContent='space-between' alignItems='center' gap={'30px'} >
          <FacebookIcon fontSize='large' sx={{color: colors.c4}}/>
          <LinkedInIcon fontSize='large' sx={{color: colors.c4}}/>
          <TwitterIcon fontSize='large' sx={{color: colors.c4}}/>
          <InstagramIcon fontSize='large' sx={{color: colors.c4}}/>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer