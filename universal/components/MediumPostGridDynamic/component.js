/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import EmailCaptureMini from 'components/EmailCaptureMini'
require('masonry-layout')

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

// const msnry = new MasonryLayout('.posts', {
//   itemSelector: ['article', 'section']
// })

// Masonry being initialized in HTML with 'data-masonry'
const msnryArgs = "{'itemSelector': 'article'}"

const MediumPostGridDynamic = () => {
  return (
    <section className={styles.featuredMediumPosts}>
      <section data-masonry={msnryArgs} className={styles.posts}>
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
