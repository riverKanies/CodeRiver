import React from 'react'
import styles from './styles'
import MediumFeaturedPostBanner from '../../components/MediumFeaturedPostBanner'
import MediumPostFilter from '../../components/MediumPostFilter'
import MediumPostGrid from '../../components/MediumPostGrid'
import FullWidthText from '../../components/FullWidthText'
import EmailCapture from '../../components/EmailCapture'
import QuoteSection from '../../components/QuoteSection'
import ThriveStoryCarousel from '../../components/ThriveStoryCarousel'

export const HomeView = () => (
  <main role='main' className={styles.homePage}>
    <MediumFeaturedPostBanner />
    <section className={styles.mediumPosts}>
      <MediumPostFilter />
      <MediumPostGrid />
    </section>
    <section className={styles.healthWellness}>
      <FullWidthText />
    </section>
    <EmailCapture />
    <section className={styles.whatIsThrive}>
      <FullWidthText />
    </section>
    <QuoteSection />
    <ThriveStoryCarousel />
    <EmailCapture />
  </main>
)

export default HomeView
