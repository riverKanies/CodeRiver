import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const ThriveStoryCarousel = ({ title = 'ThriveStoryCarousel' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default ThriveStoryCarousel
