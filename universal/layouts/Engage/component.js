// Engage Parent Page
import React from 'react'
import styles from './styles'

// Component Import
import Banner from 'components/Banner'
import Button from 'components/Button'
import MediumPostCard from 'components/MediumPostCard'
import MediumPostGrid from 'components/MediumPostGrid'
import Sidebar from 'components/Sidebar'
import Lists from 'components/Lists'
import FullWidthText from 'components/FullWidthText'

// Content Import
import lists from './assets/collections'

// Layout Content
const bannerProps = {
  title: 'Engage',
  subTitle: 'Thrive Global Media Library',
  bannerImage: 'http://placekitten.com/g/1440/900'
}
const bannerBtn = {
  buttonText: 'Read on Medium',
  linkTo: '/',
  buttonColor: 'bannerButton'
}
const featuredPostContent = {
  title: 'Featured Post',
  collectionName: 'Collection Name',
  postExcerpt: ['Lorem Ipsum, replace me.'],
  postImage: 'http://placekitten.com/g/600/600',
  buttonText: 'Read More',
  linkTo: 'javascript:void(0)',
  buttonColor: 'dark'
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
  subtitle: 'Needs a Subtitle',
  sectionText: 'Replace Me!'
}
const engageCTAs = {
  sectionClass: 'engageThrive',
  title: 'Might Need a New Component',
  subtitle: 'Or Not...',
  sectionText: 'Replace Me!'
}

// Engage Page Layout
export const EngageView = () => (
  <main role='main' className={styles.learnPage}>
    <Banner {...bannerProps}>
      <Button {...bannerBtn} />
      <MediumPostCard {...featuredPostContent} />
    </Banner>
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
    <FullWidthText {...engageCTAs} />
  </main>
)

export default EngageView
