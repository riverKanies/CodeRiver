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

const MediumPostGridDynamic = () => {
  return (
    <section className={styles.featuredMediumPosts}>
      <section className={styles.posts}>
        <MediumPostDynamic {...featuredHalfImage} />
        <EmailCaptureMini />
        <MediumPostDynamic {...featuredHalfImage} />
        <MediumPostDynamic {...featuredHalfNoImage} />
        <MediumPostDynamic {...featuredQuarterWhite} />
        <MediumPostDynamic {...featuredQuarterBlue} />
      </section>
    </section>
  )
}

export default MediumPostGridDynamic
