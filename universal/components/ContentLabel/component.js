/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
label: string,
labelColor: 'defaultLabel' | 'tealLabel' | 'blueLabel' | 'darkBlueLabel' |
  'royalBlueLabel' | 'blurpleLabel' | 'violetLabel' | 'whiteLabel'
};

const ContentLabel = ({
  label = 'Label',
  labelColor = 'defaultLabel'
}: Props) => {
  return (
    <i className={styles[labelColor]}>{label}</i>
  )
}

export default ContentLabel