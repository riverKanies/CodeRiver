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
  const linkProps = {
    className: styles[buttonStyle],
    onClick: handleClick,
    activeClassName: styles.activeStyle,
    disabled: disabled
  }
  if (linkTo) {
    linkProps.to = linkTo
  }
  return (
    <Link {...linkProps}>
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
