import React from 'react'

type MProps = {
  id: string,
  microstep_type: string,
  title: string
}

type Props = {
  list: Array<MProps>
}

function genMicrostepLink(id: string, microstep_type: string) {
  const baseUrl = 'http://localhost:4000/steps/'
  const ss = {
    'Microstep::Calendar': `${baseUrl}${id}?type=calendar`,
    'Microstep::Informational': `${baseUrl}${id}?type=informational`,
    'Microstep::Product': `${baseUrl}${id}?type=product`,
    'Microstep::Pathway': `${baseUrl}${id}?type=pathway`,
  }

  return ss[microstep_type] || "you're busted"
}

function MicrostepLI ({ id, microstep_type, title }: MProps) {
  return (
    <li key={`${microstep_type}${id}`}>
      <a target='_blank' href={`${genMicrostepLink(id, microstep_type)}`}>{title}</a>
    </li>
  )
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div>
      <h1>A Microstep List!</h1>
      <ul>
        {list.map(MicrostepLI)}
      </ul>
    </div>
  )
}
