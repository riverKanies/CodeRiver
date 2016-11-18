/* @flow */
import React from 'react'
import styles from './styles'
import placeholder from './assets/placeholder.jpg'
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
  image = placeholder,
  pathwayId,
  id }: Props) {
  return (
    <Link to={`/pathways/${pathwayId}/journeys/${id}`} className={styles.card}>
      <section>
        <span className={styles.imageWrap}>
          <img className={styles.image} src={image} />
        </span>
        <section className={styles.description}>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      </section>
    </Link>
  )
}
