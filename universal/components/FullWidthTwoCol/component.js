/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/thriveScience.jpg'
import ContentLabel from 'components/ContentLabel'
import ExternalLink from 'components/ExternalLink'

type LinkProps = {
  linkText: string,
  linkTo: string,
  linkStyle: string,
  target: string
}

type Props = {
  sectionClass: 'default' | 'lightGray' | 'fade',
  title: string,
  hasLabel: boolean,
  label: Object,
  sectionText: Array<string>,
  image: string,
  button: any,
  hasButton: boolean,
  link: LinkProps
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
  return null
}

// True/False Logic For Button/Link
function renderButton ({
    hasButton,
    link
  }: { hasButton: boolean, link: Object}) {
  if (hasButton) {
    return (
      <span className={styles.button}>
        <ExternalLink {...link} />
      </span>
    )
  }
  return (null)
}

function renderImage ({
  hasButton,
  link,
  title,
  image
}: { hasButton: boolean, link: LinkProps, image: string, title: string }) {
  if (!hasButton || !link) {
    return (
      <figure className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={title} />
      </figure>
    )
  }
  return (
    <figure className={styles.imageWrap}>
      <a href={link.linkTo} target={link.target || '_blank'} >
        <img className={styles.image} src={image} alt={title} />
      </a>
    </figure>
  )
}

const FullWidthTwoCol = ({
  sectionClass = 'default',
  title = 'Title',
  hasLabel = true,
  label = {},
  sectionText = defaultText,
  image = dummyImage,
  hasButton = true,
  link = {}
}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <div className={styles.container}>
        <div className={styles.column}>
          {renderImage({ hasButton, image, title, link })}
        </div>
        <div className={styles.column}>
          <div className={styles.sectionContent}>
            {renderLabel({hasLabel, label})}
            <header className={styles.header}>
              <h2>{title}</h2>
            </header>
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
            {renderButton({hasButton, link})}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullWidthTwoCol
