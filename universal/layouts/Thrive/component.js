/* @flow */
import React from 'react'
import styles from './styles'

import Banner from 'components/Banner'
import PartnersSection from 'components/PartnersSection'
import TeamSection from 'components/TeamSection'
import FounderBio from 'components/FounderBio'

import bannerImage from 'assets/thrivin.jpg'

const bannerProps = {
  title: 'Thrive',
  height: 'halfHeight',
  subTitle: null,
  bannerImage: bannerImage,
  bannerText: [`Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  ]
}

export const ThriveView = () => (
  <div className={styles.container}>
    <Banner {...bannerProps} />
    <TeamSection />
  </div>
)

export default ThriveView
