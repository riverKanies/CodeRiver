import React from 'react'
import styles from './styles'

import { CLIENT_URL as baseUrl } from 'lib/http'

type Microstep = {
  id: string,
  microstep_type: string,
  title: string
}

type Props = {
  list: Array<Microstep>
}

function genMicrostepLink (id: string, microstep_type: string) {
  const base = `${baseUrl}/steps/`
  const ss = {
    'Microstep::Calendar': `${base}${id}?type=calendar`,
    'Microstep::Informational': `${base}${id}?type=informational`,
    'Microstep::Product': `${base}${id}?type=product`,
    'Microstep::Pathway': `${base}${id}?type=pathway`
  }

  return ss[microstep_type] || 'link not currently available'
}

function MicrostepListItem ({ id, microstep_type, title }: Microstep) {
  const link = genMicrostepLink(id, microstep_type)
  return (
    <li key={`${microstep_type}${id}`}>
      <a target='_blank' href={link}>{title}</a>
    </li>
  )
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div>
      <ul className={styles.listContainer}>
        {list.map(MicrostepListItem)}
      </ul>
    </div>
  )
}
