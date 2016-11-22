/* @flow */
import React from 'react'
import styles from './styles'

import Microstep from 'containers/Microstep/component'
import PageHeader from 'components/PageHeader'

type Props = {
  journey: Object,
  microsteps: Array<any>
}

export default function ({ journey, microsteps = [] }: Props) {
  if (!journey) return null

  return (
    <section className={styles.container}>
      <PageHeader title={journey.title} />
      <div>
        {microsteps.map(m => (
          <div className={styles.outerContainer}>
            <div className={styles.microstepContainer}>
              <Microstep microstep={m} type={m.type} />
            </div>
            <a
              className='twitter-share-button'
              data-size='small'
              href={`https://twitter.com/intent/tweet?text=${m.share_text}`}
            >
              Share
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
