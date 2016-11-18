/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const Pathway = ({ title = 'Pathway' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default Pathway
