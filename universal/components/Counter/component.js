/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
}

export const Counter = (props: Props) => (
  <div>
    <h2 className={styles.counterContainer}>
      Counter:
      {' '}
      <span className={styles['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

export default Counter
