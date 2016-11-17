/* @flow */
import React from 'react'
import styles from './styles'
import image from './assets/product-placeholder.jpg'

type Props = {
  productTitle: string,
  price: string
}

const Product = ({
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
  props: Props
  render () {
    return (
      <section className={styles.container}>
        <section className={styles.content}>
          <h3 className={styles.header}>Shop</h3>
          <Product
            productTitle={'First Product'}
            price={'$24.00'}
          />
          <Product
            productTitle={'Second Product'}
            price={'$24.00'}
          />
          <Product
            productTitle={'Third Product'}
            price={'$24.00'}
          />
          <Product
            productTitle={'Fourth Product'}
            price={'$24.00'}
          />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
