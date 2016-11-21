import React from 'react'
import CalendarMicrostep from './components/CalendarMicrostep'
import ContentMicrostep from './components/ContentMicrostep'
import LinkMicrostep from './components/LinkMicrostep'
import ProductMicrostep from './components/ProductMicrostep'
import QuoteMicrostep from './components/QuoteMicrostep'
import MissingMicrostep from './components/MissingMicrostep'

type Props = {
  microstep: Object,
  type: string
}

export default function Microstep ({ microstep, type = '' } : Props) {
  const stepType = type.toLowerCase()

  switch (stepType) {
    case 'quote':
      return <QuoteMicrostep microstep={microstep} />

    case 'link':
      return <LinkMicrostep microstep={microstep} />

    case 'content':
      return <ContentMicrostep microstep={microstep} />

    case 'calendar':
      return <CalendarMicrostep microstep={microstep} />

    case 'product':
      return <ProductMicrostep microstep={microstep} />

    default:
      return <MissingMicrostep microstep={microstep} />
  }
}
