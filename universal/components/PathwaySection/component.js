/* @flow */
import React from 'react'
import styles from './styles'
import PathwayCard from 'components/PathwayCard'
import PathwayCardLinked from 'components/PathwayCardLinked'
import productivityImage from '../../assets/thrivin.jpg'

type Props = {
  title: string,
  pathways: Array<any>
};

const pathwayDetails = [`There are five pathways built of multiple microsteps you
  can practice in a sustainable way. The steps are small and very easy to integrate
  into your life, but the impact is transformational. This is the part where we go
  from knowing what to do to actually doing it. Choose the Pathway you want to begin
  with-- Joy, Calm, Productivity, Well-Being and Purpose.`]

const PathwaySection = ({
  title = 'The Thrive Global Pathways',
  pathways = []
}: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <header className={styles.title}>
          <h2>{title}</h2>
        </header>
        <p className={styles.details}>
          {pathwayDetails}
        </p>
        <section className={styles.row}>
          {pathways.map((pathway) =>
            <PathwayCard
              title={pathway.title}
              description={pathway.description}
              image={productivityImage}
              id={pathway.id}
            />
          )}
          <PathwayCardLinked />
        </section>
      </section>
    </section>
  )
}

export default PathwaySection
