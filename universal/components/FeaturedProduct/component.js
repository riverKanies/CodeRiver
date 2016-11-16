/* @flow */
import React from 'react'
import styles from './styles'
import image from './assets/product-placeholder.jpg'

type Props = {
  title: string,
  productTitle: string,
  price: string
}

const Product = ({
  title = 'Shop',
  productTitle = 'My product',
  price = '$20.00'
}: Props) => {
  return (
    <section className={styles.product}>
      <figure className={styles.imageWrap}>
        <img className={styles.image} src={image} />
      </figure>
      <div className={styles.description}>
        <h4>{productTitle}</h4>
        <p>{price}</p>
      </div>
    </section>
  )
}

class FeaturedProduct extends React.Component {
  render () {
    return (
      <section className={styles.container}>
        <section className={styles.content}>
          <h3 className={styles.header}>Shop</h3>
          <Product />
          <Product />
          <Product />
          <Product />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
