/* @flow */
import React from 'react'
import styles from './styles'
import defaultImage from './assets/pathFPO.jpg'
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
  image = defaultImage,
  pathwayId,
  id }: Props) {
  return (
    <Link to={`/pathways/${pathwayId}/journeys/${id}`} className={styles.card}>
      <section>
        <span className={styles.imageWrap}>
          <img className={styles.image} src={image} />
        </span>
        <section className={styles.description}>
          <h3 className={styles.header}>{title}</h3>
          <p className={styles.synopsis}>{description}</p>
        </section>
      </section>
    </Link>
  )
}
