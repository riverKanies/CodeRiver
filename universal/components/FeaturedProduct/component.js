/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const FeaturedProduct = ({ title = 'FeaturedProduct' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default FeaturedProduct
