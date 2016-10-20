import React from 'react'
import styles from './styles'
// Add in a default image

type Props = {
  title: String,
  subTitle: String,
  bannerText: Array,
  bannerImage: String,
};

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const FullscreenBanner = ({ title = 'Title', subTitle = 'Subtitle', bannerText = defaultText }: Props) => {
  return (
    <section className={styles.fullscreenBanner}>
      <img className={styles.bannerImage} src='{bannerImage}' />
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
