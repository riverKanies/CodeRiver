/* @flow */
import React from 'react'
import Mayor from './mayor.js'
import styles from './styles'
import Boston from './assets/marty-walsh.jpg'
import Minneapolis from './assets/betsy-hodges.jpg'
import Oakland from './assets/libby-schaaf.jpg'
import Providence from './assets/jorge-elorza.jpg'

type Props = {
  bgColor: 'default' | 'white' | 'blue' | 'gray' | 'fade',
  gutters: 'guttersTrue' | 'guttersFalse'
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
          image={Providence}
          name='Jorge Elorza'
          location='Providence'
        />
      </section>
    </section>
  )
}

export default FourColImage
