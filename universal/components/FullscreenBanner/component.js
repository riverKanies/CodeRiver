/* @flow */
import React from 'react'
import styles from './styles'
import dummyImage from './assets/bg.jpg'

type Props = {
  title: string,
  subTitle: string,
  bannerText: Array<string>,
  bannerImage: string,
};

const defaultText = [`Using a mobile first approach, we start with a block
display at small viewports so our copy content doesn't float on the image at
small sizes. Then as we size up we switch to flex so that we can position the
text on top of the image. This is in lieu of using a background image and
background image size.`]

const defaultImage = dummyImage

const FullscreenBanner = ({
  title = 'Title',
  subTitle = 'Subtitle',
  bannerText = defaultText,
  bannerImage = defaultImage
}: Props) => {
  return (
    <section className={styles.fullscreenBanner}>
      <span className={styles.bannerImageWrap}>
        <img className={styles.bannerImage} src={bannerImage} />
      </span>
      <div className={styles.bannerContent}>
        <header className={styles.bannerHeader}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </header>
        <section className={styles.bannerText}>
          {bannerText.map(paragraph => (<p>{paragraph}</p>))}
        </section>
      </div>
    </section>
  )
}

export default FullscreenBanner
