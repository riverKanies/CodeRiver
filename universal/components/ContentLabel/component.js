/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
label: string,
labelColor: 'defaultLabel' | 'tealLabel' | 'blueLabel' | 'darkBlueLabel' |
  'royalBlueLabel' | 'blurpleLabel' | 'violetLabel' | 'whiteLabel'
};

const ContentLabel = ({
  label = 'Label Name',
  labelColor = 'defaultLabel'
}: Props) => {
  if (label === 'Label Name') {
    return false
  }
  return (
    <i className={styles[labelColor]}>{label}</i>
  )
}

export default ContentLabel
