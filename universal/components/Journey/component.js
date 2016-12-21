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

type State = {
  anchorHash: Object
};

export default class Journey extends React.Component {
  props: Props;
  state: State;

  componentWillMount () {
    this.state = {anchorHash: window.location.hash}
  }

  componentDidUpdate () {
    const anchor = this.refs[this.state.anchorHash]
    if (typeof anchor !== 'undefined') {
      anchor.focus()
    }
  }

  anchorId (microstep: Object) {
    return `#${microstep.id}`
  }

  buildLink (pathway: Object, microstep: Object) {
    let linkTo = 'https://twitter.com/intent/tweet?text='
    linkTo += `${encodeURIComponent(pathway.share_text)}`
    linkTo += `&url=${encodeURIComponent(document.location.origin + document.location.pathname)}`
    linkTo += `${encodeURIComponent(this.anchorId(microstep))}`
    return linkTo
  }

  render () {
    const {journey, microsteps, pathway} = this.props
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
                  <input className={styles.hiddenAnchor} type='text' ref={this.anchorId(m)} />
                  <ExternalLink
                    linkText='Share'
                    linkTo={this.buildLink(pathway, m)}
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
}
