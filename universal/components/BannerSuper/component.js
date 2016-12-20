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
          <h1 className={styles.h1}>{title}</h1>
        </header>
        <section className={styles.bannerText}>
          <p>{bannerText}</p>
        </section>
        <section className={styles.buttonWrap}>
          <ExternalLink />
        </section>
      </div>
      <span className={styles.contentImage}>
        <i className={styles.details}>
          {contentImageText}
        </i>
        <img src={contentImage} alt={title} />
      </span>
    </section>
  )
}

export default BannerSuper
