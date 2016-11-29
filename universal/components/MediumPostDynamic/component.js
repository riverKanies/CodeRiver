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
  hasSynopsis = 'synopsisTrue',
  title = '',
  author = 'Thrive Contributor',
  tags = [],
  medium_uid = '',
  cover_image = dummyImage,
  trackClick
}: Props) => {
  return (
    <article className={styles[cardType]}>
      <ContentLabel label={tags[0]} />
      <section className={styles.postContent}>
        <div className={styles[hasImage]}>
          <a onClick={trackClick} href={medium_uid} target='_blank'>
            <img className={styles.image} src={cover_image} alt={title} />
          </a>
        </div>
        <header className={styles.header}>
          <h2><a onClick={trackClick} href={medium_uid} target='_blank'>{title}</a></h2>
        </header>
        <section className={styles.synopsisFalse} />
        <Author name={author} />
      </section>
    </article>
  )
}

export default MediumPostDynamic
