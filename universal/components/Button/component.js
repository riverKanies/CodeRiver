/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

type Props = {
  children: any,
  handleClick: Function,
  linkTo: string,
  buttonStyle: string,
  segmentProps: Object,
  disabled: bool,
  buttonText: String
}

export const Button = ({ children, linkTo, buttonStyle, buttonText, handleClick, segmentProps, disabled }: Props) => {
  return (
    <Link
      to={linkTo}
      className={styles[buttonStyle]}
      onClick={handleClick}
      activeClassName={styles.activeStyle}
      disabled={disabled}
    >
      {buttonText || children}
    </Link>
  )
}

Button.defaultProps = {
  buttonText: 'Join Us',
  linkTo: '/',
  buttonStyle: 'white'
}

export default Button
