/* @flow */
import React from 'react'
import styles from './styles'
import Button from 'components/Button'

type Props = {
  microstep: {
    title: string,
    body_html: string,
    link: string,
    price: string,
    image: {
      src: string
    }
  }
};

const ProductMicrostep = ({ microstep }: Props) => {
  const {
    cta_text = 'Learn More'
  } = microstep
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <header className={styles.header}>
          <h5 className={styles.label}>We Recommend</h5>
          <h1 className={styles.msTitle}>{microstep.title}</h1>
        </header>
        <span className={styles.productBy}>
          <h4><em>by</em> NAME</h4>
        </span>
        <img src={microstep.image.src} alt={microstep.title} />
        <p>{microstep.price}</p>
        <div dangerouslySetInnerHTML={{__html: microstep.body_html}} />
        <Button>
          buttonText: {cta_text},
          linkTo: {microstep.link},
          buttonStyle: 'violet'
        </Button>
      </section>
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
  }
}

export default ProductMicrostep
