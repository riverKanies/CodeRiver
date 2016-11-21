// Engage Parent Page
import React from 'react'
import styles from './styles'

// Component Import
import Banner from 'components/Banner'
import Button from 'components/Button'
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import Sidebar from 'components/Sidebar'
import Lists from 'components/Lists'

// Content Import
import lists from './assets/collections'

// Layout Content
const bannerProps = {
  title: 'Engage',
  subTitle: 'Thrive Global Media Library',
  bannerText: '',
  bannerImage: 'http://placekitten.com/g/1440/900',
  height: 'halfHeight'
}
const bannerBtn = {
  buttonText: 'Read on Medium',
  linkTo: '/',
  buttonColor: 'bannerButton'
}
const readMoreBtn = {
  buttonText: 'Read on Medium',
  linkTo: '/',
  buttonColor: 'white'
}
const sidebarList = lists['mediumCollections']
const syndicatedList = lists['mediumPosts']

// Engage Page Layout
export const EngageView = () => (
  <main role='main' className={styles.learnPage}>
    <Banner {...bannerProps}>
      <Button {...bannerBtn} />
    </Banner>
    <MediumPostGridDynamic />
    <section className={styles.readAll}>
      <Button {...readMoreBtn} />
    </section>
    <section className={styles.postList}>
      <Sidebar {...sidebarList} />
      <Lists {...syndicatedList} />
    </section>
    <section className={styles.readAll}>
      <Button {...readMoreBtn} />
    </section>
  </main>
)

export default EngageView
