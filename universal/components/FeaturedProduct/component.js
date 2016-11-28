/* @flow */
import React from 'react'
import styles from './styles'
import image_muse from './assets/Muse_black-square.jpg'
import image_sense from './assets/sense-with-voice.jpg'
import image_pillow from './assets/thrive-pillow-square.jpg'
import image_phone_bed from './assets/phone-bed-square.jpg'

type Props = {
  productTitle: string,
  productImage: any,
  productLink: string,
  productSlug: string
}

const Product = ({
  productTitle = 'My product',
  productLink = 'javascript:void(0)',
  productImage = image_pillow,
  productSlug = 'my Slug is usually about a sentance long'
}: Props) => {
  return (
    <section className={styles.product}>
      <a className={styles.productLink} href={productLink} target='_blank'>
        <figure className={styles.imageWrap}>
          <img className={styles.image} src={productImage} />
        </figure>
        <div className={styles.description}>
          <h4 className={styles.productTitle}>{productTitle}</h4>
          <p className={styles.productSlug}>{productSlug}</p>
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
            productTitle={'The Phone Bed'}
            productLink='https://shop.thriveglobal.com/products/the-phone-bed'
            productImage={image_phone_bed}
            productSlug={'Make putting your phone to bed a regular part of your nightly ritual.'}
          />
          <Product
            productTitle={'Sense with Voice by Hello'}
            productLink='https://shop.thriveglobal.com/products/sense-with-voice'
            productImage={image_sense}
            productSlug={'The sound machine, sleep monitor and smart alarm.'}
          />
          <Product
            productTitle={'Muse: The Brain Sensing Headband'}
            productLink='https://shop.thriveglobal.com/products/muse-the-brain-sensing-headband'
            productImage={image_muse}
            productSlug={'Make meditation easier.'}
          />
          <Product
            productTitle={'The Thrive Pillow by Hill House Home'}
            productLink='https://shop.thriveglobal.com/products/the-thrive-pillow-by-hill-house-home'
            productImage={image_pillow}
            productSlug={'Sleep your way to the top.'}
          />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
