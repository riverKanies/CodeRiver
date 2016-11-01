// Engage Parent Page
import React from 'react'
import styles from './styles'

// Component Import
import FullscreenBanner from 'components/FullscreenBanner'
import Button from 'components/Button'
import MediumPostCard from 'components/MediumPostCard'
import MediumPostGrid from 'components/MediumPostGrid'
import Sidebar from 'components/Sidebar'
import Lists from 'components/Lists'
import FullWidthText from 'components/FullWidthText'

// Content Import
import lists from './collections'

// Layout Content
const bannerProps = {
  title: 'Engage',
  subTitle: 'Thrive Global Media Library',
  bannerImage: ''
}
const bannerBtn = {
  buttonText: 'Read on Medium',
  linkTo: '/',
  buttonColor: 'bannerButton'
}
const readMoreBtn = {
  buttonText: 'Read on Medium',
  linkTo: '/',
  buttonColor: 'bannerButton'
}
const sidebarList = lists['mediumCollections']
const syndicatedList = lists['mediumPosts']
const thriveGlobal = {
  sectionClass: 'thriveGlobal',
  title: 'A Global Effort',
  sectionText: 'Replace Me!'
}

// Engage Page Layout
export const EngageView = () => (
  <main role='main' className={styles.learnPage}>
    <FullscreenBanner {...bannerProps}>
      <Button {...bannerBtn} />
      <MediumPostCard className={styles.featuredPost} />
    </FullscreenBanner>
    <header className={styles.readPosts}>
      <h2>Read The Latest Posts From Thrive Global</h2>
    </header>
    <MediumPostGrid />
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
    <FullWidthText {...thriveGlobal} />
  </main>
)

export default EngageView
