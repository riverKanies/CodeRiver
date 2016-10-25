import React from 'react'
import styles from './styles'

type Props = {
  title: String
};

const MediumPostFilterOption = ({ title = 'MediumPostFilterOption' }: Props) => {
  return (
    <div className={styles.inputWrap}>
      <input type='checkbox' className={styles.checkbox} value='categoryOne' />
      <label>Category One</label>
    </div>
  )
}

export default MediumPostFilterOption
