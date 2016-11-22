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
  id: String
}

export const ExternalLink = ({
  children,
  linkTo,
  linkStyle,
  linkText,
  handleClick,
  segmentProps,
  disabled,
  download = false,
  id
 }: Props) => {
  const linkProps = {
    className: styles[linkStyle],
    onClick: handleClick,
    disabled,
    href: linkTo,
    download,
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
  linkStyle: 'violet'
}

export default ExternalLink
