/* @flow */
import React from 'react'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

type LinkProps = {
  linkText: string,
  linkTo: string,
  linkStyle: string,
  target: string
}

type Props = {
  bgLink: boolean,
  bgColor: 'default' | 'blue' | 'teal' | 'blurple',
  hasLabel: boolean,
  label: string,
  title: string,
  details: any,
  hasAuthor: boolean,
  author: string,
  asset: string,
  hasButton: boolean,
  externalLink: Object,
  link: LinkProps
}

const defaultDetails = `
  Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a
  ante venenatis dapibus posuere velit aliquet.
`

const linkDefaults = {
  linkText: 'Read More',
  linkTo: '/',
  linkStyle: 'white',
  target: '_blank'
}

// Logic - hasAuthor
function renderAuthor ({
  hasAuthor,
  author
}: { hasAuthor: boolean, author: string }) {
  if (hasAuthor) {
    return (
      <span className={`${styles.authorWrap} theAuthor`}>
        <p className={styles.author}>{author}</p>
      </span>
    )
  }
  return null
}

// Logic - hasLabel
function renderLabel ({
    hasLabel,
    label
}: { hasLabel: boolean, label: string }) {
  if (hasLabel) {
    return (
      <label className={styles.label}>{label}</label>
    )
  }
  return null
}

// Logic hasButton
function renderButton ({
  hasButton,
  externalLink
}: { hasButton: boolean, externalLink: any }) {
  if (hasButton) {
    return (
      <div className={styles.button}>
        <ExternalLink {...externalLink} />
      </div>
    )
  }
  return null
}

// Logic - bgLink
function renderbgLink ({
  bgLink,
  bgColor,
  hasLabel,
  label,
  title,
  details,
  hasAuthor,
  author,
  asset,
  hasButton,
  externalLink,
  link
  }: {
  bgLink: boolean,
  bgColor: 'default' | 'blue' | 'teal' | 'blurple',
  hasLabel: boolean,
  label: string,
  title: string,
  details: any,
  hasAuthor: boolean,
  author: string,
  asset: string,
  hasButton: boolean,
  externalLink: Object,
  link: LinkProps
  }) {
  if (!bgLink) {
    return (
      <div className={styles.content}>
        {renderLabel({hasLabel, label})}
        <header className={styles.headerWrap}>
          <h2 className={styles.header}>{title}</h2>
        </header>
        <p className={`${styles.details} copyContent`}>{details}</p>
        {renderAuthor({hasAuthor, author})}
        {renderButton({hasButton, externalLink})}
      </div>
    )
  }
  return (
    <a className={styles.sectionLinkWrap} href={link.linkTo} target={link.target || '_blank'}>
      <div className={styles.content}>
        {renderLabel({hasLabel, label})}
        <header className={styles.headerWrap}>
          <h2 className={styles.header}>{title}</h2>
        </header>
        <p className={`${styles.details} copyContent`}>{details}</p>
        {renderAuthor({hasAuthor, author})}
        {renderButton({hasButton, externalLink})}
      </div>
    </a>
  )
}

const FeaturedStory = ({
  bgColor = 'default',
  bgLink = false,
  hasLabel = true,
  label = 'Stories',
  title = 'Title',
  details = defaultDetails,
  hasAuthor = false,
  author = 'Author',
  asset = 'kobe.jpg',
  hasButton = true,
  externalLink = {},
  link = linkDefaults
}: Props) => {
  return (
    <section className={styles[bgColor]} style={{backgroundImage: `url('./assets/${asset}')`}} >
      {renderbgLink({
        bgLink,
        bgColor,
        hasLabel,
        label,
        title,
        details,
        hasAuthor,
        author,
        asset,
        hasButton,
        externalLink,
        link
      })}
    </section>
  )
}

export default FeaturedStory
