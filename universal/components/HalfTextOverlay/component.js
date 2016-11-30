/* @flow */
import React from 'react'
import styles from './styles'
import ContentLabel from 'components/ContentLabel'
import Button from 'components/Button'
import dummyImage from './assets/arrianaH.jpg'

type Props = {
  postLabel: Object,
  title: string,
  sectionText: Array<string>,
  url: string,
  bgImage: string,
  hasButton: 'buttonTrue' | 'buttonFalse',
  button: Object,
  postContentStyle: string
}

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const defaultLabel = {
  label: 'Label',
  labelColor: 'whiteLabel'
}

const HalfTextOverlay = ({
  postLabel = defaultLabel,
  title = 'Headline',
  sectionText = defaultText,
  url = 'javascript:void(0)',
  bgImage = dummyImage,
  hasButton = 'buttonFalse',
  button = {},
  postContentStyle = 'postContent'
}: Props) => {
  return (
    <section className={styles.gridWrap}>
      <section className={styles.halfOverlay}>
        <span className={styles.imageWrap}>
          <a href={url}><img className={styles.image} src={bgImage} alt={title} /></a>
        </span>
        <section className={styles[postContentStyle]}>
          <ContentLabel {...postLabel} />
          <div className={styles.contentWrap}>
            <section className={styles.content}>
              <a href={url}>
                <header className={styles.header}>
                  <h2>{title}</h2>
                </header>
                {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
              </a>
              <span className={styles[hasButton]}>
                <Button {...button} />
              </span>
            </section>
          </div>
        </section>
      </section>
    </section>
  )
}

export default HalfTextOverlay
