import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from '../styles/Body.module.css'

const Gallery = ({ selectedCar }) => {
  let imgArray = [];

  useEffect(() => {
    imgArray = selectedCar.imagen.map(item => (
      item.url_img
    ))
    console.log(imgArray);
  }, [])
  
  return (
    <div className={styles.imagesContainerGallery}>
      <ImageGallery
        thumbnailPosition='bottom'
        autoPlay={true}
        showThumbnails={false}
        showIndex={true}
        slideInterval={3000}
        showFullscreenButton={false}
        items={imgArray} />
    </div>

  )
}

export default Gallery