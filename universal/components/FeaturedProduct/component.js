/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  productTitle: string,
  price: string
}

const FeaturedProduct = ({
  title = 'Shop',
  productTitle = 'My product',
  price = '$20.00'
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <h2>{title}</h2>
        <section className={styles.product}>
          <h3>{productTitle}</h3>
          <p>{price}</p>
        </section>
        <section className={styles.product}>
          <h3>{productTitle}</h3>
          <p>{price}</p>
        </section>
      </section>
    </section>
  )
}

export default FeaturedProduct
