/* @flow */
import React from 'react'
import styles from './styles'
import image_golite from './assets/goliteblue.jpg'
import image_essentials from './assets/travelessentials.png'
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
            productTitle={'The Phone Bed Charging Station'}
            productLink='https://shop.thriveglobal.com/products/the-phone-bed-charging-station'
            productImage={image_phone_bed}
            productSlug={'Make putting your phone to bed a regular part of your nightly ritual.'}
          />
          <Product
            productTitle={'goLITE BLU Energy Light'}
            productLink='https://shop.thriveglobal.com/products/golite-blu-energy-light-hf3422-60-intense-blue-light-corded'
            productImage={image_golite}
            productSlug={'Philips goLITE BLU mimics the natural energizing power of daylight.'}
          />
          <Product
            productTitle={'Arianna Huffington\'s Travel Essentials Kit'}
            productLink='https://shop.thriveglobal.com/products/arianna-huffington-tgc-travel-essentials-deluxe-kit'
            productImage={image_essentials}
            productSlug={'A few travel accessories, curated by Arianna herself.'}
          />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
