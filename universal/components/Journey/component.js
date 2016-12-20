/* @flow */
import React from 'react'
import styles from './styles'

import Microstep from 'containers/Microstep/component'
import JourneyHeader from 'components/JourneyHeader'
import ExternalLink from 'components/ExternalLink'

type Props = {
  journey: Object,
  microsteps: Array<any>,
  pathway: Object
};

export default function ({ journey, microsteps = [], pathway }: Props) {
  if (!journey) return null

  return (
    <section className={styles.container}>
      <JourneyHeader {...journey} />
      <div id='journeys' className={styles.outerContainer}>
        {microsteps.map((m, idx) => (
          <div key={idx} className={styles.outerContainer}>
            <div className={styles.microstepContainer}>
              <Microstep microstep={m} type={m.type} />
              <div className={styles.buttonWrap}>
                <ExternalLink
                  linkText='Share'
                  linkTo={`https://twitter.com/intent/tweet?text=${pathway.share_text} ${document.location.href}`}
                  linkStyle='teal'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
