import React from 'react'

import QuoteCard from './component'
export default QuoteCard

export function renderSelectedQuote(quote) {
  if (!quote) return ''
  return (<div>
    <p>Selected Plan:</p>
    <QuoteCard isSelected={true} quote={quote}/>
    <br/>
  </div>)
}
