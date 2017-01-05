/* @flow */
import React from 'react'
import { Link } from 'react-router'

import styles from './styles'

type Props = {
  children: any,
  handleClick: Function,
  id: string,
  linkTo: string,
  buttonStyle: string,
  segmentProps: Object,
  disabled: boolean,
  buttonText: string,
  download: boolean
}

export const Button = ({
  id,
  linkTo = '/',
  buttonStyle = 'violet',
  buttonText = 'Join Us',
  download = true,
  children,
  handleClick,
  segmentProps,
  disabled
 }: Props) => {
  const linkProps = {
    className: styles[buttonStyle],
    onClick: handleClick,
    activeClassName: styles.activeStyle,
    disabled: disabled,
    to: linkTo,
    download: download,
    id: id
  }

  return (
    <Link {...linkProps} >
      {children || buttonText}
    </Link>
  )
}

export default Button
