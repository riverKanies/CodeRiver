/* @flow */
import React from 'react'
import styles from './styles'
import Boston from './assets/marty-walsh.jpg'

type Props = {
  image: string,
  name: string,
  location: string
}

const Mayor = ({
  image = Boston,
  name = 'Name',
  location = 'Location'
}: Props) => {
  return (
    <figure className={styles.column}>
      <span className={styles.imageWrap}>
        <img src={image} alt={name} />
      </span>
      <figcaption className={styles.theInfo}>
        <h4 className={styles.h4}>{name}</h4>
        <h5 className={styles.h5}> Mayor of {location}</h5>
      </figcaption>
    </figure>
  )
}

export default Mayor
