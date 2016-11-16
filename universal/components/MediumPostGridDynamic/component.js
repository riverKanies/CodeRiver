/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import EmailCaptureMini from 'components/EmailCaptureMini'

// import type { MediumPost } from 'lib/types'

// {posts.map(post => <MediumPostDynamic {...post} />)}

// type Props = {
//   posts: Array<MediumPost>,
//   requestPending: boolean
// };

const featuredHalfImage = {
  cardType: 'half',
  hasImage: 'imageTrue',
  hasSynopsis: 'synopsisTrue'
}
const featuredHalfNoImage = {
  cardType: 'half',
  hasImage: 'imageFalse',
  hasSynopsis: 'synopsisTrue'
}
const featuredQuarterWhite = {
  cardType: 'quarterWhite',
  hasImage: 'imageTrue',
  hasSynopsis: 'synopsisFalse'
}
const featuredQuarterBlue = {
  cardType: 'quarterBlue',
  hasImage: 'imageTrue',
  hasSynopsis: 'synopsisFalse'
}

const grid = document.querySelector('.posts');
const msnry = new Masonry( grid, {
  itemSelector: ['.half', '.quarterWhite', '.quarterBlue']
})

const MediumPostGridDynamic = (props) => {
  return (
    <section className={styles.featuredMediumPosts}>
      <section className={styles.posts}>
        <MediumPostDynamic {...featuredHalfImage} />
        <EmailCaptureMini />
        <MediumPostDynamic {...featuredHalfNoImage} />
        <MediumPostDynamic {...featuredHalfImage} />
        <MediumPostDynamic {...featuredQuarterWhite} />
        <MediumPostDynamic {...featuredQuarterBlue} />
      </section>
    </section>
  )
}

export default MediumPostGridDynamic
