import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const BehaviorChangeSection = ({ title = 'BehaviorChangeSection' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default BehaviorChangeSection
