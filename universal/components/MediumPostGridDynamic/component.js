/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import EmailCaptureMini from 'components/EmailCaptureMini'
import Masonry from 'masonry-layout'

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

export default class MediumPostGridDynamic extends React.Component {
  componentDidMount () {
    /* eslint-disable */
    var element = document.querySelector('.MediumPostGridDynamicMasonry')
    if (element) {
      new Masonry(element)
    }
    /* eslint-enable */
  }

  render () {
    const masonizeStyles = `${styles.posts} MediumPostGridDynamicMasonry`

    return (
      <section className={styles.featuredMediumPosts}>
        <section className={masonizeStyles}>
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
}
