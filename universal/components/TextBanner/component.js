/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'image' | 'imageTeal' | 'imageGrey' | 'imageDark' |
  'imageBlue' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'gradient',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: string,
  subTitle: Array<string> | string,
}

function renderSubtitle (subTitle: Array<string> | string) {
  if (Array.isArray(subTitle)) {
    return subTitle.map((paragraph, index) => <h3 key={index}>{paragraph}</h3>)
  }
  return <h3>{subTitle}</h3>
}

const TextBanner = ({
  bgColor = 'imageTeal',
  hasTitle = 'titleTrue',
  subTitle = ['Sub Title'],
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
            {renderSubtitle(subTitle)}
          </div>
        </section>
      </div>
    </section>
  )
}

export default TextBanner
