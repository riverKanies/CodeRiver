import React from 'react'
import Button from '../Button'
import styles from './styles'
import dummyImage from './assets/bg.jpg'

type Props = {
  title: String,
  subTitle: String,
  bannerText: Array,
  bannerImage: String,
  buttonText: String,
  linkTo: String,
  buttonColor: String
};

const defaultText = [`I am a Medium Post excerpt. I am made of words, and tell
you the summary of what the heck this post is about. I am super cool.`]
const defaultImage = dummyImage

const MediumFeaturedPostBanner = ({
  title = 'Medium Post Title',
  subTitle = 'Medium Category/Collection',
  bannerText = defaultText,
  bannerImage = defaultImage,
  buttonText = 'Read More',
  buttonColor = 'bannerButton'
  }: Props) => {
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
          {bannerText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <Button />
        </section>
      </div>
    </section>
  )
}

export default MediumFeaturedPostBanner
