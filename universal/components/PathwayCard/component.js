/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  title: string,
  description: string,
  id: number,
  image: any,
};

const defaultText = [`Pathway Title`]

const PathwayCard = ({
  title = defaultText[0],
  description = 'Vestibulum id ligula porta felis euismod semper.',
  id }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.card}>
        <section className={styles.cardContainer}>
          <h3 className={styles.header}>{title}</h3>
          <div className={styles.divider} />
          <p className={styles.synopsis}>{description}</p>
        </section>
      </section>
    </section>
  )
}

export default PathwayCard
