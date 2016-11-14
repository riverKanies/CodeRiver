/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/postFPO.jpg'
import ContentLabel from 'components/ContentLabel'

type Props = {
  cardType: 'halfBGimg' | 'halfThriveBrand' | 'halfNewsSignup' | 'quarter',
  postTitle: string,
  postAuthor: string,
  hasSynopsis: 'true' | 'false',
  postSynopsis: Array<string>,
  postLabel: Object,
  postURL: 'string',
  postImage: 'string'
};

const postImage = dummyImage

const defaultText = 'When providing a health benefits strategy, employers too often focus solely on physical health.'

const MediumPostDynamic = ({
  cardType = 'halfThriveBrand',
  postTitle = 'Post Title',
  postAuthor = 'Post Author',
  hasSynopsis = 'true',
  postSynopsis = defaultText,
  postLabel = {},
  postURL = 'http://google.com'
}: Props) => {
  return (
    <figure className={styles[cardType]}>
      <a href='{postURL}'>
        <ContentLabel {...postLabel} />
        <span className={styles.imgContainer}>
          <img src={postImage} alt={postTitle} />
        </span>
        <figcaption className={styles.postMeta}>
          <header className={styles.header}>
            <h4>{postTitle}</h4>
          </header>
          <section className={styles[hasSynopsis]}>
            <p>{postSynopsis}</p>
          </section>
          <footer className={styles[cardType]}>
            <span className={styles.authorWrap}>
              <p><i>By</i> {postAuthor}</p>
            </span>
          </footer>
        </figcaption>
      </a>
    </figure>
  )
}

export default MediumPostDynamic
