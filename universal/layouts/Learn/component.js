// Learn Parent Page
import React from 'react'
import styles from './styles'
import FullscreenBanner from 'components/FullscreenBanner'
import Button from 'components/Button'
import MediumPostCard from 'components/MediumPostCard'
import MediumPostGrid from 'components/MediumPostGrid'
import Sidebar from 'components/Sidebar'

import lists from './collections'

const bannerProps = {
  title: 'Learn',
  subTitle: 'Engage with Thrive',
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
const sidebarList = lists['defaultList']

export const LearnView = () => (
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
    </section>
  </main>
)

export default LearnView
