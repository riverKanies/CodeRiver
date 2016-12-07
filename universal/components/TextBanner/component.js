/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'image' | 'imageTeal' | 'imageGrey' | 'imageDark' |
  'imageBlue' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'gradient',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  subTitle: any,
}

const TextBanner = ({
  bgColor = 'imageTeal',
  hasTitle = 'titleTrue',
  subTitle = 'Sub Title',
  title = 'Title'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <header className={styles.title}>
          <h1>{title}</h1>
        </header>
        <div className={styles.divider} />
        <section className={styles.columnWrap}>
          <div className={styles.column}>
            {subTitle.map((paragraph, i) => (<h3 key={i}>{paragraph}</h3>))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default TextBanner
