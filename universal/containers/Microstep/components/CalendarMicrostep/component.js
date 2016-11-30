import React from 'react'
import marked from 'marked'
import styles from './styles'
import ExternalLink from 'components/ExternalLink'

function renderDescription (description) {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(description)}} />
  )
}

function formatAMPM (hours) {
  return (hours < 12) ? 'AM' : 'PM'
}

function formatHours (hours) {
  return (hours % 12 === 0) ? 12 : hours % 12
}

function formatMinutes (minutes) {
  if (minutes.toString().length === 1) {
    return `0${minutes}`
  }
  return minutes
}

export default function (props: any) {
  const inc = (props.hourActive) ? props.incHour : props.incMinute
  const dec = (props.hourActive) ? props.decHour : props.decMinute

  const hourClass = (props.hourActive) ? styles.active : undefined
  const minuteClass = (!props.hourActive) ? styles.active : undefined

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {renderDescription(props.microstep.description)}
        <div id={`cal-${props.microstep.id}-actions`} className={styles.timeBar}>
          <ExternalLink
            id={`cal-${props.microstep.id}-dec-link`}
            handleClick={dec}
            linkTo={null}
          >-
          </ExternalLink>
          <section className={styles.digits}>
            <span
              id={`cal-${props.microstep.id}-active-hours`}
              className={`${hourClass} ${styles.hours}`}
              onClick={props.activateHour}
            >
              {formatHours(props.hours)}
            </span>
            <span>:</span>
            <span
              id={`cal-${props.microstep.id}-active-min`}
              className={`${minuteClass} ${styles.minutes}`}
              onClick={props.activateMinute}
            >
              {formatMinutes(props.minutes)}
            </span>
            <span>{formatAMPM(props.hours)}</span>
          </section>
          <ExternalLink
            id={`cal-${props.microstep.id}-inc-link`}
            handleClick={inc}
            linkTo={null}
          >+
          </ExternalLink>
        </div>

        <ul
          defaultValue={props.frequency}
          id='frequency'
          onChange={props.onChangeFrequency}
        >
          <li>
            <input type='radio' id='dailyOption' name='selector' value='Daily' />
            <label htmlFor='dailyOption'>Daily</label>
            <div className={styles.check} />
          </li>
          <li>
            <input type='radio' id='weeklyOption' name='selector' value='Weekly' />
            <label htmlFor='weeklyOption'>Weekly</label>
            <div className={styles.check}><div className={styles.inside} /></div>
          </li>
          <li>
            <input type='radio' id='monthlyOption' name='selector' value='Montly' />
            <label htmlFor='monthlyOption'>Monthly</label>
            <div className={styles.check}><div className={styles.inside} /></div>
          </li>
        </ul>
        <div className={styles.button}>
          <ExternalLink
            linkText={props.microstep.cta_text || 'Download Reminder'}
            linkTo={props.downloadLink}
            id={`calendar-${props.microstep.id}-download-link`}
            download
            buttonStyle='violet'
          />
        </div>
      </div>
    </div>
  )
}
