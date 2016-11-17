/* @flow */
import React from 'react'
import styles from './styles'
import ContentLabel from 'components/ContentLabel'
import dummyImage from './assets/arrianaH.jpg'

type Props = {
  label: Object,
  title: string,
  sectionText: Array<string>,
  bgImage: string
}

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const HalfTextOverlay = ({
  label = {},
  title = 'Headline',
  sectionText = defaultText,
  bgImage = dummyImage
}: Props) => {
  return (
    <section className={styles.halfOverlay}>
      <span className={styles.imageWrap}>
        <img className={styles.image} src={bgImage} alt={title} />
      </span>
      <section className={styles.postContent}>
        <ContentLabel {...label} />
        <div className={styles.contentWrap}>
          <section className={styles.content}>
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
          </section>
        </div>
      </section>
    </section>
  )
}

export default HalfTextOverlay
