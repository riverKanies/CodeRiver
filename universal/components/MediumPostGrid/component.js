/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostCard from '../MediumPostCard'
import type { MediumPost } from 'lib/types'

type Props = {
  posts: Array<MediumPost>,
  requestPending: boolean
};

const MediumPostGrid = ({
  posts = [],
  requestPending = false
}: Props) => {
  return (
    <section className={styles.featuredMediumPosts}>
      {/* <MediumPostFilter /> */}
      <section className={styles.posts}>
        {posts.map(post => <MediumPostCard {...post} />)}
      </section>
    </section>
  )
}

export default MediumPostGrid
