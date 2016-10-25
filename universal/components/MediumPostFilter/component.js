import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const MediumPostFilter = ({ title = 'MediumPostFilter' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default MediumPostFilter
