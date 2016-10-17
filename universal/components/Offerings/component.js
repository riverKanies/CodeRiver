import React from 'react'
import styles from './styles.scss'

type Props = {
  title: String,
  children: Array,
};

const Offerings = ({ title = 'Offerings', children = [] }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          {title}
        </h1>
      </div>
      <div className={styles.partnersContainer} >
        {children}
      </div>
    </div>
  )
}

export default Offerings
