import React from 'react'
import styles from './styles'
import TitleWithText from 'components/TitleWithText'

type Props = {
  title: string,
  url: string,
  hasButton: 'buttonTrue' | 'buttonFalse',
  button: Object
}

const Items = [
  {
    title: 'Corporate Partnerships',
    description: `Interested in learning more about our corporate partnerships?
                  Email us at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'corporate@thriveglobal.com',
      linkTo: 'mailto:corporate@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Media Partnerships',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email us at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'media@thriveglobal.com',
      linkTo: 'mailto:media@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Commerce Partnerships',
    description: `Interested in learning more about the Thrive Global store?
                  Email us at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'commerce@thriveglobal.com',
      linkTo: 'mailto:commerce@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Press',
    description: `Are you a member of the press seeking information about
                  Thrive Global? Email Monica Lee at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'press@thriveglobal.com',
      linkTo: 'mailto:press@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Contact',
    description: `Say hello. Email us at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'info@thriveglobal.com',
      linkTo: 'mailto:info@thriveglobal.com',
      buttonStyle: 'violet'
    }
  }
]

const MiscSection = ({
  hasButton = 'buttonTrue',
  button = {}
}: Props) => {
  return (
    <section className={styles.Container}>
      <section className={styles.SectionContainer}>
        {Items.map(
          item =>
            <section className={styles.content}>
              <TitleWithText {...item} />
            </section>
        )}
      </section>
    </section>
  )
}

export default MiscSection
