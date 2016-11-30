import React from 'react'
import styles from './styles'
import TitleWithText from 'components/TitleWithText'


const Items = [
  {
    title: 'Press',
    description: 'Are you a member of the press seeking information about Thrive Global? Email Monica Lee at monica@thriveglobal.com.'
  },
  {
    title: 'Advertise',
    description: 'Interested in learning more about brand partnerships and sponsorships with Thrive Global? Email Sam Winkelman at sw@thriveglobal.com to learn more.'
  },
  {
    title: 'Contact',
    description: 'Say hello. E-mail us at info@thriveglobal.com.'
  }
]

export const MiscSection = () => {
  return (
    <section className={styles.SectionContainer}>
      <section className={styles.content}>
        {Items.map(
          item =>
            <TitleWithText {...item} />
        )}
      </section>
    </section>

  )
}

export default MiscSection
