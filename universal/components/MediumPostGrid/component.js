import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const MediumPostGrid = ({ title = 'MediumPostGrid' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default MediumPostGrid
