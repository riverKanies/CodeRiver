/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  name: string,
  image: any,
  bio: string,
  onClick: Function
}

const FounderBio = ({
  name,
  title,
  image,
  bio,
  onClick = () => {}
}: Props) => {
  return (
    <section className={styles.container} onClick={onClick}>
      <section className={styles.content}>
        <section className={styles.image} style={{backgroundImage: `url(${image})`}}>
          <section className={styles.text}>
            <h3>{name}</h3>
            <h4>{title}</h4>
          </section>
        </section>
      </section>
    </section>
  )
}

export default FounderBio
