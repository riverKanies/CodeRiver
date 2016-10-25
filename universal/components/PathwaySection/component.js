import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const PathwaySection = ({ title = 'PathwaySection' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default PathwaySection
