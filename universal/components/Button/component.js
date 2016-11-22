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
  disabled: boolean,
  buttonText: String,
  download: boolean
}

export const Button = ({
  children,
  linkTo,
  buttonStyle,
  buttonText,
  handleClick,
  segmentProps,
  disabled,
  download = true
 }: Props) => {
  const linkProps = {
    className: styles[buttonStyle],
    onClick: handleClick,
    activeClassName: styles.activeStyle,
    disabled,
    to: linkTo,
    download
  }

  return (
    <Link {...linkProps} >
      {children || buttonText}
    </Link>
  )
}

Button.defaultProps = {
  buttonText: 'Join Us',
  linkTo: '/',
  buttonStyle: 'violet'
}

export default Button
