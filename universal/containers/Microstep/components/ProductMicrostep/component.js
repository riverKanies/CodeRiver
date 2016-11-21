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
  },
  button: {
    buttonText: string,
    buttonStyle: string
  }
};

const ProductMicrostep = ({ microstep }: Props) => {
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

        <div dangerouslySetInnerHTML={{__html: microstep.body_html}} />

        <img src={microstep.image.src} alt={microstep.title} />
        <p>{microstep.price}</p>

        <div className={styles.button}>
          <Button>
            buttonText: 'Learn More',
            linkTo: {microstep.link},
            buttonStyle: 'violet'
          </Button>
        </div>

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
  },
  button: {
    buttonText: 'Learn More',
    buttonStyle: 'violet'
  }
}

export default ProductMicrostep
