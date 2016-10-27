/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const ThriveStoryCarousel = ({ title = 'ThriveStoryCarousel' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default ThriveStoryCarousel
