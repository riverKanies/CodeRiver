/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string
}

const PageFooter = ({ title = 'PageFooter' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default PageFooter
