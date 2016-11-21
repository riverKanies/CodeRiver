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
        <section className={styles.time}>
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
        </section>
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
