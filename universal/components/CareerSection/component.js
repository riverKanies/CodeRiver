import React from 'react'
import styles from './styles'
import HalfTextOverlay from 'components/HalfTextOverlay'
import team from './assets/team.jpg'

const title = 'Join The Thrive Tribe'
const text = [`Join the team that is changing the way we work and live.
  Thrive Global is looking for innovative and passionate employees across all
  our teams--technology and engineering, media, sales and marketing, and more.
  Email us with your resume attached at jobs@thriveglobal.com to learn about
  joining our Thrive Tribe!`]
const label = { 'label': 'Careers' }
const url = 'mailto:jobs@thriveglobal.com'

export const CareerSection = () => {
  return (
    <section className={styles.SectionContainer} id='careers'>
      <section className={styles.content}>
        <HalfTextOverlay title={title} sectionText={text} url={url} postLabel={label} bgImage={team} />
      </section>
    </section>
  )
}

export default CareerSection
