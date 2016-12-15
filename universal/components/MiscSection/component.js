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
    title: 'Partnerships: Corporate',
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
    title: 'Partnerships: Media',
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
    title: 'Partnerships: Commerce',
    description: `Interested in learning more about the Thrive Global store?
                  Email us at commerce@thriveglobal.com`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'jobs@thriveglobal.com',
      linkTo: 'mailto:jobs@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Press',
    description: `Are you a member of the press seeking information about
                  Thrive Global? Email Monica Lee at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'monica@thriveglobal.com',
      linkTo: 'mailto:monica@thriveglobal.com',
      buttonStyle: 'violet'
    }
  },
  {
    title: 'Contact',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email Sam Winkelman at`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'sw@thriveglobal',
      linkTo: 'mailto:sw@thriveglobal',
      buttonStyle: 'violet'
    }
  }
]

const MiscSection = ({
  hasButton = 'buttonTrue',
  button = {}
}: Props) => {
  return (
    <section className={styles.SectionContainer}>
      <section className={styles.content}>
        {Items.map(
          item =>
            <section>
              <TitleWithText {...item} />
            </section>
        )}
      </section>
    </section>

  )
}

export default MiscSection
