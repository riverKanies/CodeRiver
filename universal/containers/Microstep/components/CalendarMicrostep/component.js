import React from 'react'
import marked from 'marked'
import styles from './styles'
import Button from 'components/Button'

function renderDescription (description) {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(description)}} />
  )
}

export default function (props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {renderDescription(props.microstep.description)}
        <input
          className={styles.hours}
          defaultValue={props.hours}
          id='hours'
          max='23'
          min='00'
          onChange={props.onChangeHours}
          type='number'
        />
        <input
          className={styles.minutes}
          defaultValue={props.minutes}
          id='minutes'
          max='59'
          min='00'
          onChange={props.onChangeMinutes}
          type='number'
        />
        <p>Select time.</p>
        <select
          defaultValue={props.frequency}
          id='frequency'
          onChange={props.onChangeFrequency}
        >
          <option value='DAILY'>Daily</option>
          <option value='WEEKLY'>Weekly</option>
          <option value='MONTHLY'>Monthly</option>
        </select>
        <p>Select frequency.</p>
        <div className={styles.button}>
          <Button>
            buttonText: {props.microstep.cta_text || 'Download Reminder'},
            linkTo: {props.downloadLink},
            buttonStyle: 'violet'
          </Button>
        </div>
      </div>
    </div>
  )
}
