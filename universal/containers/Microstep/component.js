import React from 'react'
import CalendarMicrostep from './components/CalendarMicrostep'
import ContentMicrostep from './components/ContentMicrostep'
import LinkMicrostep from './components/LinkMicrostep'
import ProductMicrostep from './components/ProductMicrostep'
import QuoteMicrostep from './components/QuoteMicrostep'
import MissingMicrostep from './components/MissingMicrostep'

type Props = {
  microstep: Object,
  type: string,
  showLabel: boolean
}

export default function Microstep (props: Props) {
  const type = props.type || ''

  switch (type) {
    case 'quote':
      return <QuoteMicrostep {...props} />

    case 'link':
      return <LinkMicrostep {...props} />

    case 'content':
      return <ContentMicrostep {...props} />

    case 'calendar':
      return <CalendarMicrostep {...props} />

    case 'product':
      return <ProductMicrostep {...props} />

    default:
      return <MissingMicrostep {...props} />
  }
}
