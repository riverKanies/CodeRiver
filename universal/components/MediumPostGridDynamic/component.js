/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import type { MediumPost } from 'lib/types'

type Props = {
  posts: Array<MediumPost>,
  requestPending: boolean
};

const MediumPostGridDynamic = ({
  posts = [],
  requestPending = false
}: Props) => {
  return (
    <section className={styles.featuredMediumPosts}>
      {/* <MediumPostFilter /> */}
      <section className={styles.posts}>
        {posts.map(post => <MediumPostDynamic {...post} />)}
      </section>
    </section>
  )
}

export default MediumPostGridDynamic
