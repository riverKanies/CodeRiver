import React from 'react'

type Props = {
  list: Array<any>
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div>
      <h1>A Microstep List!</h1>
      <ul>
        {list.map(m => <li key={`${m.microstep_type}${m.id}`}>{m.title}</li>)}
      </ul>
    </div>
  )
}
