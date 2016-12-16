import React from 'react'
import styles from './styles'
import TitleWithText from 'components/TitleWithText'

const Items = [
  {
    title: 'Press',
    description: `Are you a member of the press seeking information about
                  Thrive Global? Email Monica Lee at
                  <a href="mailto:monica@thriveglobal.com">monica@thriveglobal.com</a>.`
  },
  {
    title: 'Advertise',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email Sam Winkelman at
                  <a href="mailto:sw@thriveglobal.com">sw@thriveglobal.com</a> to learn more.`
  },
  {
    title: 'Contact',
    description: 'Say hello. E-mail us at <a href="mailto:info@thriveglobal.com">info@thriveglobal.com</a>.'
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
