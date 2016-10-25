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
        <input type='checkbox' className={styles.checkbox} value='categoryTwo' />
        <label>{categoryTwo}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryThree' />
        <label>{categoryThree}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryFour' />
        <label>{categoryFour}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categoryFive' />
        <label>{categoryFive}</label>
      </div>
      <div className={styles.inputWrap}>
        <input type='checkbox' className={styles.checkbox} value='categorySix' />
        <label>{categorySix}</label>
      </div>
    </fieldset>
  )
}

export default MediumPostFilterOptions
