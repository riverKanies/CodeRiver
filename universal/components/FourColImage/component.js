/* @flow */
import React from 'react'
import styles from './styles'
import Boston from './assets/marty-walsh.jpg'
import Minneapolis from './assets/betsy-hodges.jpg'
import Oakland from './assets/libby-schaaf.jpg'
import Providence from './assets/jorge-elorza.jpg'

type Props = {
  bgColor: 'default' | 'white' | 'blue' | 'gray' | 'fade',
  gutters: 'guttersTrue' | 'guttersFalse',
  image: string,
  name: string,
  location: string
}

const Mayor = ({
  image = Minneapolis,
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

const FourColImage = ({
  bgColor = 'default',
  gutters = 'guttersFalse'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <section className={styles[gutters]}>
        <Mayor
          image={Boston}
          name='Marty Walsh'
          location='Boston'
        />
        <Mayor
          image={Minneapolis}
          name='Betsy Hodges'
          location='Minneapolis'
        />
        <Mayor
          image={Oakland}
          name='Libby Schaaf'
          location='Oakland'
        />
        <Mayor
          image={Oakland}
          name='Jorge Elorza'
          location='Oakland'
        />
      </section>
    </section>
  )
}

export default FourColImage
