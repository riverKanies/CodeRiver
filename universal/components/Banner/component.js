/* @flow */
// Fullscreen Banner Component
import React from 'react'
import styles from './styles'
import dummyImage from 'assets/bg.jpg'

type Props = {
  contentPosition: 'defaultPosition' | 'bottomLeft',
  title: string,
  bannerText: string,
  bannerImage: string,
  height: 'fullHeight' | 'halfHeight' | 'quarterHeight' | 'thirdHeight' | 'twoThirdsHeight'
};

const defaultImage = dummyImage

const FullscreenBanner = ({
  contentPosition = 'defaultPosition',
  title = 'Title',
  bannerText = 'Hello, I am text!',
  bannerImage = defaultImage,
  height = 'fullHeight'
}: Props) => {
  return (
    <section className={styles[height]}>
      <span className={styles.bannerImageWrap}>
        <img className={styles.bannerImage} src={bannerImage} />
      </span>
      <div className={styles[contentPosition]}>
        <header className={styles.bannerHeader}>
          <h1 className={styles.h1}>{title}</h1>
        </header>
        <section className={styles.bannerText}>
          <p>{bannerText}</p>
        </section>
      </div>
    </section>
  )
}

export default FullscreenBanner
