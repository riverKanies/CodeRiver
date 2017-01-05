/* @flow */
import React from 'react'
import styles from './styles'

// Default Image
import image_phone_bed from './assets/phone-bed-square.jpg'

// Product Image Import
import Vyper from './assets/product_vyper.jpg'
import Upright from './assets/product_upright.jpg'
import innerBalance from './assets/product_inner-balance.jpg'

type Props = {
  productTitle: string,
  productImage: any,
  productLink: string,
  productSlug: string
}

const Product = ({
  productTitle = 'My product',
  productLink = 'javascript:void(0)',
  productImage = image_phone_bed,
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
            productTitle={'Vyper, Fitness & Recovery Device'}
            productLink={
              'https://shop.thriveglobal.com/collections/body/products/vyper'
            }
            productImage={Vyper}
            productSlug={
              'The VYPER is a cutting-edge fitness and recovery device/roller that uses' +
              'pressure and vibration to improve the body\'s overall performance.'
            }
          />
          <Product
            productTitle={'Upright | Posture Trainer'}
            productLink={
              'https://shop.thriveglobal.com/collections/body/products/upright-wearable-posture-trainer'
            }
            productImage={Upright}
            productSlug={
              'Upright is a smart wearable posture trainer recommended by physicians and ' +
              'chiropractors with proven success to decrease back pain and increase  productivity.'
            }
          />
          <Product
            productTitle={'Inner Balance™ Trainer'}
            productLink={
              'https://shop.thriveglobal.com/collections/unplug-recharge/products/' +
              'inner-balance-trainer-release-stress-in-the-moment'
            }
            productImage={innerBalance}
            productSlug={
              'Inner Balance guides you to inner calm, clarity in decision-making and balanced composure. ' +
              'We call this experience “Coherence."'
            }
          />
        </section>
      </section>
    )
  }
}

export default FeaturedProduct
