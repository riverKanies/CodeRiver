/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from 'assets/bg.jpg'

type Props = {
  contentPosition: 'defaultPosition' | 'bottomLeft',
  title: string,
  bannerText: string,
  bannerImage: string,
  bannerImageOverlay: 'overlayTrue' | 'overlayFalse',
  height: 'fullHeight' | 'halfHeight' | 'quarterHeight' | 'thirdHeight' | 'twoThirdsHeight'
};

const defaultImage = dummyImage

const FullscreenBanner = ({
  contentPosition = 'defaultPosition',
  title = 'Title',
  bannerText = 'Hello, I am text!',
  bannerImage = defaultImage,
  bannerImageOverlay = 'overlayTrue',
  height = 'fullHeight'
}: Props) => {
  return (
    <section className={`${styles[height]} banner`}>
      <span className={`${styles[bannerImageOverlay]} imageWrap`}>
        <img className={styles.bannerImage} src={bannerImage} alt={title} />
      </span>
      <div className={`${styles[contentPosition]} bannerContent`}>
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
