import React from 'react'
import styles from './styles'
import OfferingCTA from 'components/OfferingCTA'

type Props = {
  title: String,
  children: Array,
};

const Offerings = ({ title = 'Offerings', children = [] }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          {title}
        </h1>
      </div>
      <div className={styles.partnersContainer} >
        <OfferingCTA />
        <OfferingCTA />
        <OfferingCTA />
      </div>
    </div>
  )
}

export default Offerings
