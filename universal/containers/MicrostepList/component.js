import styles from './styles'
import React from 'react'

type Props = {
  list: Array<any>
}

export default function MicrostepList ({ list }: Props) {
  return (
    <div className={styles.container}>
      <h1>A Microstep List!</h1>
      <ul>
        {list.map(m => <li key={m.id}>{m.title}</li>)}
      </ul>
    </div>
  )
}
