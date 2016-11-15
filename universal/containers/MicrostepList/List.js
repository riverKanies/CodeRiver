import React from 'react'
import styles from './styles'
import Paginate from './Paginate'
import CopyToClipboard from 'react-copy-to-clipboard'

import CalendarSVG from './assets/calendar.svg'
import CopySVG from './assets/copy.svg'
import InformationalSVG from './assets/informational.svg'
import ProductSVG from './assets/product.svg'
import PathwaySVG from './assets/pathway.svg'

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

function genMicrostepIcon (microstep_type: string) {
  const ss = {
    'Microstep::Calendar': CalendarSVG,
    'Microstep::Informational': InformationalSVG,
    'Microstep::Product': ProductSVG,
    'Microstep::Pathway': PathwaySVG
  }

  return ss[microstep_type]
}

function MicrostepListItem ({ id, microstep_type, title }: Microstep) {
  const link = genMicrostepLink(id, microstep_type)
  const Icon = genMicrostepIcon(microstep_type)

  return (
    <li className={styles.listItem} key={`${microstep_type}${id}`}>
      <CopyToClipboard text={link}>
        <div className={styles.listRow}>
          <img src={Icon} className={styles.stepIcon} />
          <img src={CopySVG} className={styles.copyIcon} />
          <p>{title} <span className={styles.tooltip}>
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
