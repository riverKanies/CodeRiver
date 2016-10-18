import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const OfferingCTA = ({ title = 'OfferingCTA' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default OfferingCTA
