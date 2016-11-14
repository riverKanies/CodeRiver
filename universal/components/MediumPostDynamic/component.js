/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/postFPO.jpg'
import ContentLabel from 'components/ContentLabel'

type Props = {
  cardType: 'half' | 'quarter',
  postTitle: string,
  postAuthor: string,
  hasImage: 'imageTrue' | 'imageFalse',
  hasSynopsis: 'true' | 'false',
  postSynopsis: Array<string>,
  postLabel: Object,
  postURL: 'string',
  postImage: 'string'
};

const postImage = dummyImage

const defaultText = 'When providing a health benefits strategy, employers too often focus solely on physical health.'

const MediumPostDynamic = ({
  cardType = 'half',
  postTitle = 'Post Title',
  postAuthor = 'Post Author',
  hasImage = 'imageTrue',
  hasSynopsis = 'true',
  postSynopsis = defaultText,
  postLabel = {},
  postURL = 'javascript:void(0)'
}: Props) => {
  return (
    <figure className={styles[cardType]}>
      <a className={styles.cardLink} href={postURL}>
        <ContentLabel {...postLabel} />
        <figcaption className={styles.postMeta}>
          <header className={styles.header}>
            <h3>{postTitle}</h3>
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
        <span className={styles[hasImage]}>
          <img className={styles.image} src={postImage} alt={postTitle} />
        </span>
      </a>
    </figure>
  )
}

export default MediumPostDynamic
