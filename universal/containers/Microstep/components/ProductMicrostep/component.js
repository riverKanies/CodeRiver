/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'
import { genRedirectToShopify } from 'lib/sso'
import TwitterShare from 'components/TwitterShare'
import MicrostepLabel from 'components/MicrostepLabel'

type Props = {
  microstep: {
    cta_text: string,
    title: string,
    body_html: string,
    link: string,
    price: string,
    share_text: string;
    image: {
      src: string
    }
  },
  showLabel: boolean,
  button: {
    buttonText: string,
    buttonStyle: string
  }
};

const ProductMicrostep = ({ microstep, showLabel = false }: Props) => {
  const { share_text = 'I just completed a microstep' } = microstep
  return (
    <div className={styles.container}>
      <MicrostepLabel title='Thrive Goods' visible={showLabel} />
      <section className={styles.content}>
        <header className={styles.header}>
          <h5 className={styles.label}>We Recommend</h5>
          <h1 className={styles.msTitle}>{microstep.title}</h1>
        </header>

        <span className={styles.productBy}>
          <h4><em>by</em> NAME</h4>
        </span>

        <div dangerouslySetInnerHTML={{__html: microstep.body_html}} />

        <section className={styles.product}>
          <div className={styles.imgCol}>
            <img src={microstep.image.src} alt={microstep.title} />
          </div>
          <div className={styles.contentCol}>
            <h3 className={styles.productTitle}>{microstep.title}</h3>
            <p className={styles.productPrice}>{microstep.price}</p>
          </div>
        </section>

        <div className={styles.button}>
          <Button handleClick={genRedirectToShopify(microstep.link)} >
            {microstep.cta_text}
          </Button>
        </div>

      </section>
      <TwitterShare share_text={share_text} />
    </div>
  )
}

ProductMicrostep.defaultProps = {
  microstep: {
    title: 'Product',
    body_html: 'Stuff',
    link: 'link/to/store',
    price: '$0.00',
    image: {
      src: '/path/to/image'
    }
  },
  button: {
    buttonText: 'Learn More',
    buttonStyle: 'violet'
  }
}

export default ProductMicrostep
