import React from 'react'
import styles from './styles'
import PathwayCard from 'components/PathwayCard'

type Props = {
  title: String
};

const PathwaySection = ({ title = 'PathwaySection' }: Props) => {
  return (
    <section className={styles.container}>
      <PathwayCard
        title='Joy'
        description='Learn all about Joy nstuff'
      />
      <PathwayCard
        title='Calm'
        description='Learn all about Calm nstuff'
      />
      <PathwayCard
        title='Productivity'
        description='Learn all about Productivity nstuff'
      />
    </section>
  )
}

export default PathwaySection
