import React from 'react'
import marked from 'marked'
import styles from './styles'
import Button from 'components/Button'

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
  const increment = (props.hourActive) ? props.incrementHour : props.incrementMinute
  const decrement = (props.hourActive) ? props.decrementHour : props.decrementMinute

  const hourClass = (props.hourActive) ? styles.active : undefined
  const minuteClass = (!props.hourActive) ? styles.active : undefined

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {renderDescription(props.microstep.description)}
        <div className={styles.timeBar}>
          <Button
            handleClick={decrement}
            linkTo={null}
          >-
          </Button>
          <span className={hourClass} onClick={props.activateHour}>{formatHours(props.hours)}</span>
          <span>:</span>
          <span className={minuteClass} onClick={props.activateMinute}>{formatMinutes(props.minutes)}</span>
          <span>{formatAMPM(props.hours)}</span>
          <Button
            handleClick={increment}
            linkTo={null}
          >+
          </Button>
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
          <Button
            buttonText={props.microstep.cta_text || 'Download Reminder'}
            linkTo={props.downloadLink}
            buttonStyle='violet'
          />
        </div>
      </div>
    </div>
  )
}
