import React from 'react'
import Button from '../Button'

import styles from './styles'
import dummyImage from './assets/bg.jpg'

type Props = {
  title: String,
  subTitle: String,
  bannerText: Array,
  bannerImage: String,
};

const defaultText = [`Using a mobile first approach, we start with a block
display at small viewports so our copy content doesn't float on the image at
small sizes. Then as we size up we switch to flex so that we can position the
text on top of the image. This is in lieu of using a background image and
background image size.`]

const defaultImage = dummyImage

const MediumFeaturedPostBanner = ({ title = 'Title', subTitle = 'Subtitle',
bannerText = defaultText, bannerImage = defaultImage }: Props) => {
  return (
    <section className={styles.MediumFeaturedPostBanner}>
      <span className={styles.bannerImageWrap}>
        <img className={styles.bannerImage} src={bannerImage} />
      </span>
      <div className={styles.bannerContent}>
        <header className={styles.bannerHeader}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </header>
        <section className={styles.postExcerpt}>
          {bannerText.map(paragraph => (<p>{paragraph}</p>))}
          <Button />
        </section>
      </div>
    </section>
  )
}

Button.defaultProps = {
  buttonText: 'Join Us',
  linkTo: '/',
  color: 'light'
}

export default MediumFeaturedPostBanner
