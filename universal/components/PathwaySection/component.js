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
