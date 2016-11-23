
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import FullWidthTwoColLeft from 'components/FullWidthTwoColLeft'

import bannerImage from './assets/techBanner.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Tech Page',
  bannerText: 'Donec sed odio dui.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'halfHeight'
}

export const GiveView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthTwoColLeft />
      <FullWidthTwoColLeft />
      <FullWidthTwoColLeft />
      <FullWidthTwoColLeft />
    </section>
  </section>
)

export default GiveView
