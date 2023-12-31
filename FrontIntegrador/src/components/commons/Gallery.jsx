import React, { useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from '../styles/Body.module.css'

const Gallery = ({ selectedCar }) => {

  const imagesArray = selectedCar.imagen

  const formattedImages = (arr) => {
    const newArr = []
    for (let image of arr) {
      newArr.push({ original: image.url_img, description: image.titulo })
    }
    return newArr
  }

  return (
    <div className={styles.imagesContainerGallery}>
      <ImageGallery
        thumbnailPosition='bottom'
        autoPlay={true}
        showThumbnails={false}
        showIndex={true}
        slideInterval={3000}
        showFullscreenButton={false}
        items={formattedImages(imagesArray)} />
    </div>
  )
}

export default Gallery