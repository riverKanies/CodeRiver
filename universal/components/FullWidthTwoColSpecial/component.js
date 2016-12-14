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
  sectionClass: 'default' | 'lightGray' | 'transparent' | 'fade',
  title: string,
  hasLabel: boolean,
  hasColorBar: 'colorBarTrue' | 'colorBarFalse',
  label: Object,
  sectionText: Array<string>,
  image: string,
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
      <a className={styles.imgLink} href={link.linkTo} target={link.target || '_blank'} >
        <img className={styles.image} src={image} alt={title} />
      </a>
    </figure>
  )
}

function renderHeader ({
  hasButton,
  link,
  title
  }: { hasButton: boolean, link: LinkProps, title: string }) {
  if (!hasButton || !link) {
    return (
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
    )
  }
  return (
    <header className={styles.header}>
      <h2><a href={link.linkTo} target={link.target || '_blank'}>{title}</a></h2>
    </header>
  )
}

const FullWidthTwoColSpecial = ({
  sectionClass = 'default',
  title = 'Title',
  hasLabel = true,
  hasColorBar = 'colorBarTrue',
  label = {},
  sectionText = defaultText,
  image = dummyImage,
  hasButton = false,
  link
}: Props) => {
  return (
    <section className={styles[sectionClass]}>
      <div className={styles.container}>
        <div className={styles[hasColorBar]}>
          <div className={styles.sectionContent}>
            {renderLabel({hasLabel, label})}
            {renderHeader({hasButton, link, title})}
            {sectionText.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
            {renderButton({hasButton, link})}
          </div>
        </div>
        <div className={styles.column}>
          {renderImage({ hasButton, image, title, link })}
        </div>
      </div>
    </section>
  )
}

export default FullWidthTwoColSpecial
