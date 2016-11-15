/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  productTitle: string,
  price: string
}

const fp1 = {
  title: 'boomtown',
  productTitle: 'Teapots',
  price: '$22.00'
}

const fp2 = {
  title: 'boomcityUSA',
  productTitle: 'Diamondgrillz',
  price: '$45,550'
}

const Product = ({
  title = 'Shop',
  productTitle = 'My product',
  price = '$20.00'
}: Props) => {
  return (
    <section className={styles.product}>
      <h3>{title}</h3>
      <p>{productTitle}
        <span>
          {price}
        </span>
      </p>
    </section>
  )
}

class FeaturedProduct extends React.Component {
  render () {
    return (
      <section className={styles.container}>
        <section className={styles.content}>
          <h2>Hello</h2>
          <Product {...fp1} />
          <Product {...fp2} />
          <Product {...fp2} />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
