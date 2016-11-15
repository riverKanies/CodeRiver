/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/postFPO.jpg'
import ContentLabel from 'components/ContentLabel'

type Props = {
  cardType: 'half' | 'quarterWhite' | 'quarterBlue',
  hasImage: 'imageTrue' | 'imageFalse',
  hasSynopsis: 'synopsisTrue' | 'synopsisFalse',
  postTitle: string,
  postAuthor: string,
  postSynopsis: Array<string>,
  postLabel: Object,
  postURL: 'string',
  postImage: 'string'
};

const postImage = dummyImage

const defaultText = 'When providing a health benefits strategy, employers too often focus solely on physical health.'

const MediumPostDynamic = ({
  cardType = 'half',
  hasImage = 'imageTrue',
  hasSynopsis = 'synopsisTrue',
  postTitle = 'Post Title',
  postAuthor = 'Post Author',
  postSynopsis = defaultText,
  postLabel = {},
  postURL = 'javascript:void(0)'
}: Props) => {
  return (
    <article className={styles[cardType]}>
      <ContentLabel {...postLabel} />
      <section className={styles.postContent}>
        <div className={styles[hasImage]}>
          <img className={styles.image} src={postImage} alt={postTitle} />
        </div>
        <header className={styles.header}>
          <h2><a href={postURL}>{postTitle}</a></h2>
        </header>
        <section className={styles[hasSynopsis]}>
          <p><a href={postURL}>{postSynopsis}</a></p>
        </section>
        <footer className={styles.footer}>
          <span className={styles.authorWrap}>
            <i>by</i> {postAuthor}
          </span>
        </footer>
      </section>

    </article>
  )
}

export default MediumPostDynamic
