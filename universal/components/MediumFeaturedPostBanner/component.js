import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const MediumFeaturedPostBanner = ({ title = 'MediumFeaturedPostBanner' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default MediumFeaturedPostBanner
