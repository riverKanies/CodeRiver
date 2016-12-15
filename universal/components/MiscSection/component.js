import React from 'react'
import styles from './styles'
import TitleWithText from 'components/TitleWithText'
import Button from 'components/Button'

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
                  Email us at corporate@thriveglobal.com`
  },
  {
    title: 'Partnerships: Media',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email us at
                  media@thriveglobal.com`
  },
  {
    title: 'Partnerships: Commerce',
    description: `Interested in learning more about the Thrive Global store?
                  Email us at commerce@thriveglobal.com`,
    hasButton: 'buttonTrue',
    button: {
      buttonText: 'Thrive With Us',
      linkTo: 'mailto:jobs@thriveglobal.com',
      buttonStyle: 'white'
    }
  },
  {
    title: 'Press',
    description: `Are you a member of the press seeking information about
                  Thrive Global? Email Monica Lee at monica@thriveglobal.com`
  },
  {
    title: 'Contact',
    description: `Interested in learning more about brand partnerships and
                  sponsorships with Thrive Global? Email Sam Winkelman at
                  sw@thriveglobal`,
    link: 'mailto:sw@thriveglobal.com'
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
              <span className={styles[hasButton]}>
                <Button {...button} />
              </span>
            </section>
        )}
      </section>
    </section>

  )
}

export default MiscSection
