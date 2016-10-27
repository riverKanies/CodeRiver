/* @flow */
import React from 'react'
import styles from './styles'
import PathwayCard from 'components/PathwayCard'
import productivityImage from '../PathwayCard/assets/pathway-red.jpg'

type Props = {
  title: string
};

const PathwaySection = ({ title = 'Pathways' }: Props) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <section className={styles.row}>
        <PathwayCard
          title='Joy'
          description='Learn all about joy nstuff'
        />
        <PathwayCard
          title='Calm'
          description='Learn all about calm nstuff'
        />
        <PathwayCard
          title='Productivity'
          description='Learn all about productivity nstuff'
          image={productivityImage}
        />
        <PathwayCard
          title='Well-being'
          description='Learn all about well-being nstuff'
        />
        <PathwayCard
          title='Unplugging'
          description='Learn all about unplugging nstuff. Longer description here.'
        />
      </section>
    </section>
  )
}

export default PathwaySection
