import React from 'react'
import styles from './styles'
import TitleWithText from 'components/TitleWithText'

type Props = {
  title: string,
  url: string,
  hasButton: 'buttonTrue' | 'buttonFalse',
  button: Object
}

const items = [
  {
    title: 'Corporate Partnerships',
    description: `Interested in learning more about our corporate partnerships?
                  Email us at`,
    hasButton: 'buttonTrue',
    buttonProps: {
      buttonText: 'corporate@thriveglobal.com',
      linkTo: 'mailto:corporate@thriveglobal.com',
      external: true
    }
  },
  {
    title: 'Media Partnerships',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email us at`,
    buttonProps: {
      buttonText: 'media@thriveglobal.com',
      linkTo: 'mailto:media@thriveglobal.com',
      external: true
    }
  },
  {
    title: 'Commerce Partnerships',
    description: `Interested in learning more about the Thrive Global store?
                  Email us at`,
    buttonProps: {
      buttonText: 'commerce@thriveglobal.com',
      linkTo: 'mailto:commerce@thriveglobal.com',
      external: true
    }
  },
  {
    title: 'Press',
    description: `Are you a member of the press seeking information about
                  Thrive Global? Email Monica Lee at`,
    buttonProps: {
      buttonText: 'press@thriveglobal.com',
      linkTo: 'mailto:press@thriveglobal.com',
      external: true
    }
  },
  {
    title: 'Contact',
    description: `Say hello. Email us at`,
    buttonProps: {
      buttonText: 'info@thriveglobal.com',
      linkTo: 'mailto:info@thriveglobal.com',
      external: true
    }
  }
]

const MiscSection = ({
  hasButton = 'buttonTrue',
  button = {}
}: Props) => {
  return (
    <section className={styles.SectionContainer}>
      <section className={styles.innerContainer}>
        {items.map(
          (item, idx) =>
            <section key={idx}>
              <TitleWithText {...item} />
            </section>
        )}
      </section>
    </section>
  )
}

export default MiscSection
