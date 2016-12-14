/* @flow */
import React from 'react'

import styles from './styles'

type Props = {
  children: any,
  handleClick: Function,
  linkTo: string,
  linkStyle: string,
  segmentProps: Object,
  disabled: boolean,
  linkText: String,
  download: boolean,
  id: string,
  target: string
}

export const ExternalLink = ({
  children,
  linkTo,
  linkStyle,
  linkText,
  handleClick,
  segmentProps,
  disabled,
  target = '_self',
  download = false,
  id
 }: Props) => {
  const linkProps = {
    className: styles[linkStyle],
    onClick: handleClick,
    disabled,
    href: linkTo,
    download,
    target,
    id
  }

  return (
    <a {...linkProps} >
      {children || linkText}
    </a>
  )
}

ExternalLink.defaultProps = {
  linkText: 'Join Us',
  linkTo: '/',
  linkStyle: 'violet',
  target: '_blank'
}

export default ExternalLink
