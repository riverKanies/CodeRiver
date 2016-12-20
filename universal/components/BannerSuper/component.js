/* @flow */
import React from 'react'
import ExternalLink from 'components/ExternalLink'
import styles from './styles'
import dummyImage from './assets/pledge-banner.jpg'
import extraImage from './assets/glassdoorLogo.svg'

type LinkProps = {
  linkText: string,
  linkTo: string,
  linkStyle: string,
  target: string
}

type Props = {
  title: Array<string>,
  bannerText: string,
  bannerImage: string,
  bannerImageOverlay: 'overlayTrue' | 'overlayFalse',
  hasButton: boolean,
  hasContentImage: boolean,
  contentImage: string,
  hasContentImageText: boolean,
  contentImageText: string,
  link: LinkProps
};

const defaultImage = dummyImage

// True/False Logic For Button
function renderButton ({
    hasButton,
    link
  }: { hasButton: boolean, link: LinkProps }) {
  if (hasButton) {
    return (
      <section className={styles.buttonWrap}>
        <ExternalLink {...link} />
      </section>
    )
  }
  return null
}

// True/False Logic Content Image
function renderContentImage ({
    hasContentImage,
    contentImage,
    contentImageText,
    title
  }: { hasContentImage: boolean, contentImage: string, contentImageText: string, title: Array<string> }) {
  if (hasContentImage) {
    return (
      <span className={styles.contentImage}>
        <i className={styles.details}>
          {contentImageText}
        </i>
        <img src={contentImage} alt={title} />
      </span>
    )
  }
  return null
}

const BannerSuper = ({
  title = ['Title'],
  bannerText = 'Hello, I am text!',
  bannerImage = defaultImage,
  bannerImageOverlay = 'overlayFalse',
  hasButton = true,
  hasContentImage = true,
  contentImage = extraImage,
  hasContentImageText = true,
  contentImageText = 'in partnership with',
  link
}: Props) => {
  return (
    <section className={styles.bannerSuper}>
      <span className={styles[bannerImageOverlay]}>
        <img className={styles.bannerImage} src={bannerImage} alt={title} />
      </span>
      <div className={styles.content}>
        <header className={styles.bannerHeader}>
          {title.map((paragraph, i) => (<h1 className={styles.h1} key={i}>{paragraph}</h1>))}
        </header>
        <section className={styles.bannerText}>
          <p className={styles.p}>{bannerText}</p>
        </section>
        {renderButton({ hasButton, link })}
      </div>
      {renderContentImage({ hasContentImage, contentImage, contentImageText, title })}
    </section>
  )
}

export default BannerSuper
