/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/ariannaHuffington.jpg'

type Props = {
  image: string,
  altText: string
}

const FullBleedImage = ({
  image = defaultImage,
  altText = 'Arianna Huffington'
}: Props) => {
  return (
    <section className={styles.fullBleedImage}>
      <img className={styles.img} src={image} alt={altText} />
    </section>
  )
}

export default FullBleedImage
