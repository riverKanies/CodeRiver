/* @flow */
import React from 'react'
import styles from './styles'
import image_one from './assets/defaultImage.png'
import image_two from './assets/ft-arianna.jpg'

type ImageProps = {
  image: any,
  link: string | null,
  caption: string | null
}

type Props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  image: any,
  images: ImageProps[]
}

// linked image

const RenderImage = ({
  link,
  caption,
  image = image_one
}: ImageProps) => {
  if (link) {
    return (
      <div className={styles.column}>
        <a className={styles.imgLink} href={link} target='_blank'>
          <img className={styles.image} src={image} />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </a>
      </div>
    )
  }
  return (
    <div className={styles.column}>
      <img className={styles.image} src={image} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </div>
  )
}

const defaultImages = [
  { image: image_one, link: null, caption: null },
  { image: image_two, link: null, caption: null }
]

function PressArticles ({
  bgColor = 'default',
  hasTitle = 'titleFalse',
  title = 'PressArticles',
  images = defaultImages
}: Props) {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles[hasTitle]}>
          <h2>{title}</h2>
        </header>
        <section className={styles.columnWrap}>
          {images.map((image, i) => <RenderImage key={i} {...image} />)}
        </section>
      </div>
    </section>
  )
}

export default PressArticles
