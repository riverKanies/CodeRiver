/* @flow */
import React from 'react'
import styles from './styles'
import MediumPostDynamic from 'components/MediumPostDynamic'
import { actions } from 'modules/Middleware/analytics'
import {
  featuredHalfHeightImage,
  featuredQuarterWhite,
  featuredQuarterBlue
} from '../sharedImageFormatting'

const numberOfDisplayedStories = 10

type Props = {
  dispatch: Function,
  posts: Object
}

export default class AccenturePostGridDynamic extends React.Component {
  genTracker: Function
  props: Props

  constructor () {
    super(...arguments)
    this.genTracker = this.genTracker.bind(this)
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

  renderHBMS (postType: string) {
    const { posts } = this.props
    let storyKey = postType + '_story'

    if (!posts[storyKey]) return null

    return (
      <MediumPostDynamic
        cardType='half'
        hasImage='imageTrue'
        hasSynopsis='synopsisTrue'
        {...posts[storyKey]}
        tags={[postType]}
        trackClick={this.genTracker(posts[storyKey].medium_uid)}
      />
    )
  }

  renderPost (index: number) {
    const { stories } = this.props.posts

    const s = [
      featuredQuarterWhite,
      featuredQuarterBlue,
      featuredQuarterWhite,
      featuredQuarterBlue,
      featuredHalfHeightImage,
      featuredHalfHeightImage
    ]

    if (!stories || !stories[index]) {
      return null
    }
    if (!s[index]) {
      s[index] = featuredHalfHeightImage
    }

    return <MediumPostDynamic
      {...s[index]}
      {...stories[index]}
      trackClick={this.genTracker(stories[index].medium_uid)}
      key={stories[index].medium_uid}
      tags={stories[index].accenture_tags}
    />
  }

  render () {
    const masonizeStyles = `${styles.posts} MediumPostGridDynamicMasonry`
    let enumerator = Array.from(Array(numberOfDisplayedStories).keys())

    return (
      <section className={styles.featuredMediumPosts}>
        <section className={masonizeStyles}>
          {this.renderHBMS('heart')}
          {this.renderHBMS('body')}
          {this.renderHBMS('mind')}
          {this.renderHBMS('soul')}
        </section>
        <section className={styles.clear}>
          {enumerator.map(i => this.renderPost(i))}
        </section>
      </section>
    )
  }
}
