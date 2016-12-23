/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  bgColor: 'default' | 'image' | 'imageTeal' | 'imageGrey' | 'imageDark' |
  'imageBlue' | 'transparent' | 'lightGray' | 'purple' | 'blue' | 'gradient',
  hasTitle: 'titleTrue' | 'titleFalse',
  hasDivider: 'dividerTrue' | 'dividerFalse',
  titleFont: 'mon' | 'playfair',
  title: string,
  subTitle: any,
  divider: any
}

function renderSubtitle (subTitle: Array<string> | string) {
  if (Array.isArray(subTitle)) {
    return subTitle.map((paragraph, index) => <h3 className='stSelect' key={index}>{paragraph}</h3>)
  }
  return <h3 className='stSelect'>{subTitle}</h3>
}

const TextBanner = ({
  bgColor = 'imageTeal',
  hasTitle = 'titleTrue',
  subTitle = ['Sub Title'],
  hasDivider = 'dividerTrue',
  titleFont = 'playfair',
  title = 'Title'
}: Props) => {
  return (
    <section className={styles[bgColor]}>
      <div className={styles.container}>
        <section className={styles.title}>
          <h1 className={styles[titleFont]} id='textBannerTitle'>{title}</h1>
        </section>
        <div className={styles[hasDivider]} />
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
