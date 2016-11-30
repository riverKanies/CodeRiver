/* @flow */
import React from 'react'
import styles from './styles'
import { Link } from 'react-router'

type Props = {
  title: string,
  description: string,
  id: number,
};

const defaultText = [`Pathway Title`]

const PathwayCard = ({
  title = defaultText[0],
  description = 'Vestibulum id ligula porta felis euismod semper.',
  id }: Props) => {
  return (
    <Link to={`/pathways/${id}`} className={styles.card}>
      <section className={styles.cardContainer}>
        <h3 className={styles.header}>{title}</h3>
        <div className={styles.divider} />
        <p className={styles.synopsis}>{description}</p>
      </section>
    </Link>
  )
}

export default PathwayCard
