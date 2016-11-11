import React from 'react'
import styles from './styles'
import Paginate from './Paginate'
import CopyToClipboard from 'react-copy-to-clipboard'

import { CLIENT_URL as baseUrl } from 'utils/http'

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
    <li className={styles.listItem} key={`${microstep_type}${id}`}>
      <CopyToClipboard text={link}>
        <p>{title}</p>
      </CopyToClipboard>
    </li>
  )
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div>
      <p className={styles.resultsText}>SEARCH RESULTS</p>
      <ul className={styles.listContainer}>
        {list.map(MicrostepListItem)}
      </ul>
      <Paginate />
    </div>
  )
}
