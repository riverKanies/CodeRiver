/* @flow */
import React from 'react'
import styles from './styles'
import PathwayCard from 'components/PathwayCard'
import productivityImage from '../PathwayCard/assets/pathway-red.jpg'

type Props = {
  title: string,
  pathways: Array<any>
};

const PathwaySection = ({ title = 'Pathways', pathways = [] }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h2>{title}</h2>
      </section>
      <section className={styles.row}>
        {pathways.map((pathway) =>
          <PathwayCard
            title={pathway.title}
            description={pathway.description}
            image={productivityImage}
            id={pathway.id}
          />
        )}
      </section>
    </section>
  )
}

export default PathwaySection
