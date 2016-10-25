import React from 'react'
import styles from './styles'

type Props = {
  categoryOne: String
};

const MediumPostFilterOptions = ({
  categoryOne = 'Category One'
}: Props) => {
  return (
    <div className={styles.inputWrap}>
      <input type='checkbox' className={styles.checkbox} value='categoryOne' />
      <label>{categoryOne}</label>
    </div>
  )
}

export default MediumPostFilterOptions
