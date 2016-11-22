
/* @flow */
import React from 'react'
import styles from './styles'
import Banner from 'components/Banner'
import FullWidthText from 'components/FullWidthText'
import LearnCTASection from 'components/LearnCTASection'

import bannerImage from './assets/givingBanner.jpg'

const bannerProps = {
  contentPosition: 'bottomLeft',
  title: 'Don\'t Just Be a Go-Getter, Be a Go-Giver',
  bannerText: 'Donec sed odio dui.',
  bannerImage: bannerImage,
  bannerImageOverlay: 'overlayFalse',
  height: 'halfHeight'
}

const theThriveFoundation = {
  sectionClass: 'default',
  title: 'The Thrive Foundation',
  sectionText: ['Curabitur blandit tempus porttitor. ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Curabitur blandit tempus porttitor.']
}

const trainNonProfits = {
  alignment: 'center',
  sectionClass: 'default',
  title: 'We Train Non-Profits',
  sectionText: ['Hello there... ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ' +
  'Curabitur blandit tempus porttitor.']
}

export const GiveView = () => (
  <section className={styles.container}>
    <section className={styles.content}>
      <Banner {...bannerProps} />
      <FullWidthText {...theThriveFoundation} />
      <LearnCTASection {...trainNonProfits} />
    </section>
  </section>
)

export default GiveView
