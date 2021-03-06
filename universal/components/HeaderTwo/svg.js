/* @flow */
/*eslint-disable*/
import React from 'react'
import styles from './styles'

export function NavButton () {
  return (
    <svg className={styles.button} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
      <title>Open/Close Menu</title>
      <path className={styles.topLine} d='M32,11.75H8A1.88,1.88,0,0,1,8,8H32a1.88,1.88,0,0,1,0,3.75Z' />
      <path className={styles.middleLine} d='M32,21.88H8a1.88,1.88,0,0,1,0-3.75H32a1.88,1.88,0,0,1,0,3.75Z' />
      <path className={styles.bottomLine} d='M32,32H8a1.88,1.88,0,0,1,0-3.75H32A1.88,1.88,0,0,1,32,32Z' />
    </svg>
  )
}
/*eslint-enable*/
