/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const PageHeader = ({ title = 'PageHeader' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default PageHeader
