/* @flow */
// Fullscreen Banner Component
import React from 'react'
import styles from './styles'
import dummyImage from 'assets/bg.jpg'

type Props = {
  title: string,
  subTitle: string,
  bannerText: Array<string>,
  bannerImage: string,
  height: 'fullHeight' | 'halfHeight' | 'quarterHeight' | 'thirdHeight' | 'twoThirdsHeight'
};

const defaultImage = dummyImage

const FullscreenBanner = ({
  title = 'Title',
  subTitle = 'Subtitle',
  bannerText = 'Hello, I am text!',
  bannerImage = defaultImage,
  height = 'fullHeight'
}: Props) => {
  return (
    <section className={styles[height]}>
      <span className={styles.bannerImageWrap}>
        <img className={styles.bannerImage} src={bannerImage} />
      </span>
      <div className={styles.bannerContent}>
        <header className={styles.bannerHeader}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </header>
        <section className={styles.bannerText}>
          <p>{bannerText}</p>
        </section>
      </div>
    </section>
  )
}

export default FullscreenBanner
