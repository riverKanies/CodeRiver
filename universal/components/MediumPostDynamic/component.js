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
  medium_uid: 'string',
  cover_image: 'string',
  trackClick: Function
};

function Author ({ name }: { name: string }) {
  const byline = (name.length > 0) ? name : 'Thrive Contributor'
  return (
    <footer className={styles.footer}>
      <span className={styles.authorWrap}>
        <i>by</i> {byline}
      </span>
    </footer>
  )
}

const MediumPostDynamic = ({
  cardType = 'half',
  hasImage = 'imageTrue',
  hasSynopsis = 'synopsisFalse',
  title = 'This is a super long placeholder title that should clip with and ellipses on the lil guys.',
  author = 'Thrive Contributor',
  tags = [],
  medium_uid = '',
  cover_image = dummyImage,
  trackClick
}: Props) => {
  return (
    <a
      onClick={trackClick}
      href={medium_uid}
      target='_blank'
      className={styles[cardType]}
    >
      <ContentLabel label={tags[0]} />
      <article className={styles.postContent}>
        <div className={styles[hasImage]}>
          <img className={styles.image} src={cover_image} alt={title} />
        </div>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <section className={styles[hasSynopsis]} />
        <Author name={author} />
      </article>
    </a>
  )
}

export default MediumPostDynamic
