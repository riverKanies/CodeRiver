import React from 'react'
import styles from './styles'
import Paginate from './Paginate'
import CopyToClipboard from 'react-copy-to-clipboard'

import CalendarSVG from './assets/calendar.svg'
import CopySVG from './assets/copy.svg'
import InformationalSVG from './assets/informational.svg'
import ProductSVG from './assets/product.svg'

import { CLIENT_URL as baseUrl } from 'lib/http'

type Microstep = {
  id: string,
  type: string,
  search_field: string
}

type Props = {
  list: Array<Microstep>
}

function genMicrostepLink (id: string, microstep_type: string) {
  const base = `${baseUrl}/steps/`
  const type = microstep_type.toLowerCase()

  return `${base}${id}?type=${type}`
}

function genMicrostepIcon (microstep_type: string) {
  const ss = {
    'Calendar': CalendarSVG,
    'Content': InformationalSVG,
    'Product': ProductSVG
  }

  return ss[microstep_type] || InformationalSVG
}

function MicrostepListItem ({ id, type, search_field }: Microstep) {
  const link = genMicrostepLink(id, type)
  const Icon = genMicrostepIcon(type)

  return (
    <li className={styles.listItem} key={`${type}${id}`}>
      <CopyToClipboard text={link}>
        <div className={styles.listRow}>
          <img src={Icon} className={styles.stepIcon} />
          <img src={CopySVG} className={styles.copyIcon} />
          <p>{search_field} <span className={styles.tooltip}>
            Click to Copy
          </span></p>
        </div>
      </CopyToClipboard>
    </li>
  )
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div>
      <div className={styles.listContainer}>
        <ul>
          {list.map(MicrostepListItem)}
        </ul>
      </div>
      <Paginate />
    </div>
  )
}
