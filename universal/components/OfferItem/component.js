/* @flow */
import React from 'react'
import styles from './styles'
import imagePlaceholder from './assets/team-placeholder.jpg'

type Props = {
  title: string,
  description: string
};

const defaultTitle ="Offer Title"
const defaultDescription = '.....science stuff'

const OfferItemView = ({
  title = defaultTitle,
  description = defaultDescription
}: Props) => {
  return (
    <section className={styles.offerContainer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </section>
  )
}

export default OfferItemView
