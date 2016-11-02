/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

type Props = {
  children: any,
  handleClick: Function,
  linkTo: string,
  buttonColor: string,
  segmentProps: Object,
  disabled: bool,
  buttonText: String
}

export const Button = ({ children, linkTo, buttonColor, buttonText, handleClick, segmentProps, disabled }: Props) => {
  return (
    <Link
      to={linkTo}
      className={styles[buttonColor]}
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
  buttonColor: 'light'
}

export default Button
