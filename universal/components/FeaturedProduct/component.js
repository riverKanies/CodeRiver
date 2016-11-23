/* @flow */
import React from 'react'
import styles from './styles'
import image from './assets/Muse_black-square.jpg'
import image2 from './assets/sense-square.jpg'
import image3 from './assets/thrive-pillow-square.jpg'
import image4 from './assets/phone-bed-square.jpg'

type Props = {
  productTitle: string,
  price: string,
  productImage: any,
  productLink: string
}

const Product = ({
  productTitle = 'My product',
  productLink = 'javascript:void(0)',
  productImage = image
}: Props) => {
  return (
    <section className={styles.product}>
      <a className={styles.productLink} href={productLink} target='_blank'>
        <figure className={styles.imageWrap}>
          <img className={styles.image} src={productImage} />
        </figure>
        <div className={styles.description}>
          <h4 className={styles.productTitle}>{productTitle}</h4>
        </div>
      </a>
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
            productTitle={'Muse'}
            productLink='https://shop.thriveglobal.com/products/muse-the-brain-sensing-headband'
            productImage={image}
          />
          <Product
            productTitle={'Sense'}
            productLink='https://shop.thriveglobal.com/products/sense-with-voice'
            productImage={image2}
          />
          <Product
            productTitle={'Thrive Pillow'}
            productLink='https://shop.thriveglobal.com/products/the-thrive-pillow-by-hill-house-home'
            productImage={image3}
          />
          <Product
            productTitle={'Phone Bed'}
            productLink='https://shop.thriveglobal.com/products/the-phone-bed'
            productImage={image4}
          />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
