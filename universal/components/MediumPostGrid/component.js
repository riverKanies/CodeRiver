/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostFilter from '../MediumPostFilter'
import MediumPostCard from '../MediumPostCard'

type Props = {
  title: string
};

const MediumPostGrid = ({
  title = 'MediumPostGrid'
}: Props) => {
  return (
    <section className={styles.featuredMediumPosts}>
      <MediumPostFilter />
      <section className={styles.posts}>
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
        <MediumPostCard />
      </section>
    </section>
  )
}

export default MediumPostGrid
