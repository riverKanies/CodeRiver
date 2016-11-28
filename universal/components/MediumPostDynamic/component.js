/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/postFPO.jpg'
import ContentLabel from 'components/ContentLabel'

type Props = {
  cardType: 'half' | 'halfHeight' | 'quarterWhite' | 'quarterBlue',
  hasImage: 'imageTrue' | 'imageFalse',
  hasSynopsis: 'synopsisTrue' | 'synopsisFalse',
  title: string,
  author: string,
  synopsis: Array<string>,
  tags: Array<string>,
  postLabel: Object,
  postURL: 'string',
  cover_image: 'string'
};

const defaultText = ['When providing a health benefits strategy, employers too often focus solely on physical health.']
const MediumPostDynamic = ({
  cardType = 'half',
  hasImage = 'imageTrue',
  hasSynopsis = 'synopsisTrue',
  title = '',
  author = '',
  synopsis = defaultText,
  tags = [],
  postURL = 'javascript:void(0)',
  cover_image = dummyImage
}: Props) => {
  Props
  return (
    <article className={styles[cardType]}>
      <ContentLabel label={tags[0]} />
      <section className={styles.postContent}>
        <div className={styles[hasImage]}>
          <a href={postURL}><img className={styles.image} src={cover_image} alt={title} /></a>
        </div>
        <header className={styles.header}>
          <h2><a href={postURL}>{title}</a></h2>
        </header>
        <section className={styles[hasSynopsis]}>
          <p><a href={postURL}>{synopsis}</a></p>
        </section>
        <footer className={styles.footer}>
          <span className={styles.authorWrap}>
            <i>by</i> {author}
          </span>
        </footer>
      </section>
    </article>
  )
}

export default MediumPostDynamic
