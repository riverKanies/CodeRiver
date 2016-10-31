// Learn Parent Page
import React from 'react'
import styles from './styles'
import FullscreenBanner from 'components/FullscreenBanner'
import Button from 'components/Button'

export const LearnView = () => {
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
  return (
    <main role='main' className={styles.learnPage}>
      <FullscreenBanner {...bannerProps}>
        <Button {...bannerBtn} />
      </FullscreenBanner>
    </main>
  )
}

export default LearnView
