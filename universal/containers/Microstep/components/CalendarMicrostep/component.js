import React from 'react'
import marked from 'marked'

function renderDescription (description) {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(description)}} />
  )
}

export default function (props: any) {
  return (
    <div style={{height: '100vh', padding: '10px'}}>
      <h1>{props.microstep.title}</h1>
      {renderDescription(props.microstep.description)}
      <input
        defaultValue={props.hours}
        id='hours'
        max='23'
        min='00'
        onChange={props.onChangeHours}
        type='number'
      />
      <input
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
      <a href={props.downloadLink} download>
        {props.microstep.cta_text || 'Download Reminder'}
      </a>
    </div>
  )
}
