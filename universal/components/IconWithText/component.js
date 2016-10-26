import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const IconWithText = ({ title = 'IconWithText' }: Props) => {
  return (
    <div className={styles.container}>
      {title}
    </div>
  )
}

export default IconWithText
