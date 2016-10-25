import React from 'react'
import styles from './styles'

type Props = {
  categoryOne: String,
  categoryTwo: String,
  categoryThree: String,
  categoryFour: String,
  categoryFive: String,
  categorySix: String,
};

const MediumPostFilterOptions = ({
  categoryOne = 'Category One',
  categoryTwo = 'Category Two',
  categoryThree = 'Category Three',
  categoryFour = 'Category Four',
  categoryFive = 'Category Five',
  categorySix = 'Category Six'
}: Props) => {
  return (
    <fieldset className={styles.categories}>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categoryOne}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categoryTwo}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categoryThree}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categoryFour}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categoryFive}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryOne' />
        <label>{categorySix}</label>
      </div>
    </fieldset>
  )
}

export default MediumPostFilterOptions
