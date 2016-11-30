/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import EmailCaptureMini from 'components/EmailCaptureMini'
import { actions } from 'modules/Middleware/analytics'
import Masonry from 'masonry-layout'

const featuredHalfImage = {
  cardType: 'half',
  hasImage: 'imageTrue',
  hasSynopsis: 'synopsisTrue'
}
const featuredHalfHeightImage = {
  cardType: 'halfHeight',
  hasImage: 'imageTrue',
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
type Props = {
  posts: Array<Object>,
  dispatch: Function
}

export default class MediumPostGridDynamic extends React.Component {
  genTracker: Function
  props: Props

  constructor () {
    super(...arguments)
    this.genTracker = this.genTracker.bind(this)
  }

  componentDidUpdate () {
    /* eslint-disable */
    var element = document.querySelector('.MediumPostGridDynamicMasonry')
    if (element) {
      new Masonry(element)
    }
    /* eslint-enable */
  }

  genTracker (articleId: string) {
    const { dispatch } = this.props
    return function (e: any) {
      dispatch({
        type: actions.articleClickThrough,
        track: { articleId }
      })
    }
  }

  renderPost (index: number) {
    const { posts } = this.props

    const s = [
      featuredHalfImage,
      featuredHalfHeightImage,
      featuredHalfImage,
      featuredHalfImage,
      featuredQuarterWhite,
      featuredQuarterBlue,
      featuredQuarterWhite,
      featuredQuarterBlue,
      featuredHalfHeightImage,
      featuredHalfHeightImage
    ]

    if (!posts[index] || !s[index]) {
      return null
    }

    return <MediumPostDynamic
      {...s[index]}
      {...posts[index]}
      trackClick={this.genTracker(posts[index].medium_uid)}
    />
  }

  render () {
    const masonizeStyles = `${styles.posts} MediumPostGridDynamicMasonry`

    return (
      <section className={styles.featuredMediumPosts}>
        <section className={masonizeStyles}>
          {this.renderPost(0)}
          {this.renderPost(1)}
          {this.renderPost(2)}
          {this.renderPost(3)}
          <EmailCaptureMini />
        </section>
        <section className={styles.clear}>
          {this.renderPost(4)}
          {this.renderPost(5)}
          {this.renderPost(6)}
          {this.renderPost(7)}
          {this.renderPost(8)}
          {this.renderPost(9)}
        </section>
      </section>
    )
  }
}
