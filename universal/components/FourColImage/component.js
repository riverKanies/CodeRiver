/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/defaultImage.png'

type Props = {
  bgColor: 'default' | 'white' | 'blue' | 'gray' | 'tagalong' | 'fade',
  gutters: 'guttersTrue' | 'guttersFalse',
  image: string,
  name: string,
  location: string
}

const Mayor = ({
  image = defaultImage,
  name = 'Name',
  location = 'Location'
}: Props) => {
  return (
    <figure className={styles.column}>
      <span className={styles.imageWrap}>
        <img src={image} alt={name} />
      </span>
      <figcaption className={styles.theInfo}>
        <h3 className={styles.h3}>{name}</h3>
        <h4 className={styles.h4}> Mayor of {location}</h4>
      </figcaption>
    </figure>
  )
}

const FourColImage = ({
  bgColor = 'default',
  gutters = 'guttersFalse'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <section className={styles[gutters]}>
        <Mayor
          image=''
          name=''
          location=''
        />
      </section>
    </section>
  )
}

export default FourColImage
