import { IconButton, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import styles from '../styles/Body.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '280px',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SharePage = ({ open, handleClose, currentPageUrl }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p>Comparti este producto en tu red social favorita!</p>
        {/* <div className={styles.closeBtnContainer}>
          <IconButton sx={{ display: 'flex', justifyContent: 'flex-end' }} disableRipple={true} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div> */}
        <div className={styles.shareContainer}>
          <FacebookShareButton url={currentPageUrl}>
            <FacebookIcon />
          </FacebookShareButton>

          <TwitterShareButton url={currentPageUrl}>
            <TwitterIcon />
          </TwitterShareButton>

          <LinkedinShareButton url={currentPageUrl}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </div>
      </Box>
    </Modal>
  )
}

export default SharePage