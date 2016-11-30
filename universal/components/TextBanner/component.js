/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'image' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'gradient',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  subTitle: string,
}

const TextBanner = ({
  bgColor = 'image',
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
            <h3>{subTitle}</h3>
          </div>
        </section>
      </div>
    </section>
  )
}

export default TextBanner
