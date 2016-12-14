/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/thriveScience.jpg'
import ContentLabel from 'components/ContentLabel'
import ExternalLink from 'components/ExternalLink'
import Button from 'components/Button'

type Props = {
  sectionClass: 'default' | 'lightGray' | 'fade',
  title: string,
  hasLabel: boolean,
  label: Object,
  sectionText: Array<string>,
  image: string,
  button: any,
  hasButton: boolean,
  linktoURL: string,
  link: Object
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

// True/False Logic For Label
function renderLabel ({
  hasLabel,
  label
  }: { hasLabel: boolean, label: Object}) {
  if (hasLabel) {
    return (
      <span className={styles.label}>
        <ContentLabel {...label} />
      </span>
    )
  }
  return (null)
}

// True/False Logic For Button/Link
function renderButton ({
  hasButton,
  linktoURL,
  link
  }: { hasButton: boolean, linktoURL: string, link: Object}) {
  if (hasButton) {
    return (
      <span className={styles.button}>
        <ExternalLink {...link} />
      </span>
    )
  }
  return (null)
}

// True/False Logic For Wrapping Image In Anchor
function renderImage ({
  image,
  title,
  hasButton,
  linktoURL
  }: { image: string, title: string, hasButton: boolean, linktoURL: string }) {
  if (hasButton) {
    return (
      <a className={styles.imgLink} href={linktoURL}><img className={styles.image} src={image} alt={title} /></a>
    )
  }
  return (
    <img className={styles.image} src={image} alt={title} />
  )
}

const FullWidthTwoCol = ({
  sectionClass = 'default',
  title = 'Title',
  hasLabel = true,
  label = {},
  sectionText = defaultText,
  image = dummyImage,
  button = null,
  hasButton = true,
  linktoURL = 'http://www.thriveglobal.com',
  link = {}

}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <section className={styles.container}>
        <div className={styles.column}>
          <figure className={styles.imageWrap}>
            {renderImage({image, title, hasButton, linktoURL})}
          </figure>
        </div>
        <div className={styles.column}>
          <section className={styles.sectionContent}>
            {renderLabel({hasLabel, label})}
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
            {button ? <Button {...button} /> : ''}
            {renderButton({hasButton, link})}
          </section>
        </div>
      </section>
    </section>
  )
}

export default FullWidthTwoCol
