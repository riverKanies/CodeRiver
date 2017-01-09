/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'
import dummyImage from './assets/ariannaH.jpg'

type Props = {
  title: string,
  sectionText: Array<string>,
  url: string,
  target: string,
  bgColor: string,
  bgImage: string,
  hasButton: boolean,
  button: Object,
  postContentStyle: 'postContent' | 'postContentRight',
  id: string
}

function renderButton ({
  hasButton,
  button
}: { hasButton: boolean, button: Object }) {
  if (hasButton) {
    return (
      <span className={styles.buttonStyle}>
        <ExternalLink {...button} />
      </span>
    )
  }
  return null
}

const HalfTextOverlay = ({
  title = 'Headline',
  sectionText,
  url = '#',
  bgColor = 'default',
  bgImage = dummyImage,
  id = '',
  target = '_blank',
  hasButton = false,
  button = {},
  postContentStyle = 'postContent'
}: Props) => {
  if (!sectionText) {
    return null
  }
  return (
    <section className={styles[bgColor]}>
      <section className={styles.gridWrap} id={id}>
        <section className={styles.halfOverlay}>
          <span className={styles.imageWrap}>
            <a className={styles.imgLinkWrap} href={url}><img className={styles.image} src={bgImage} alt={title} /></a>
          </span>
          <section className={styles[postContentStyle]}>
            <div className={styles.contentWrap}>
              <section className={styles.content}>
                <a href={url} target={target}>
                  <header className={styles.header}>
                    <h2>{title}</h2>
                  </header>
                  {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
                </a>
                {renderButton({hasButton, button})}
              </section>
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

export default HalfTextOverlay
