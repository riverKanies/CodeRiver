/* @flow */
import React from 'react'
import styles from './styles'
import { Link } from 'react-router'

type Props = {
  title: string,
  description: string,
  id: number,
  pathwayId: number,
  image: any,
};

export default function ({
  title = 'Don\'t stop believing',
  description = 'Vestibulum id ligula porta felis euismod semper.',
  pathwayId,
  id }: Props) {
  return (
    <Link to={`/pathways/${pathwayId}/journeys/${id}`} className={styles.card}>
      <section className={styles.cardContainer}>
        <h3 className={styles.header}>{title}</h3>
        <div className={styles.divider} />
        <p className={styles.synopsis}>{description}</p>
      </section>
    </Link>
  )
}
