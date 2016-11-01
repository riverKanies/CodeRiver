/* @flow */
import React from 'react'
import styles from './styles'

type Props = {
  categoryOne: string,
  categoryTwo: string,
  categoryThree: string,
  categoryFour: string,
  categoryFive: string,
  categorySix: string,
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
        <label><input type='checkbox' className={styles.checkbox} value='categoryOne' />{categoryOne}</label>
      </div>
      <div className={styles.inputWrap}>
        <label><input type='checkbox' className={styles.checkbox} value='categoryTwo' />{categoryTwo}</label>
      </div>
      <div className={styles.inputWrap}>
        <label><input type='checkbox' className={styles.checkbox} value='categoryThree' />{categoryThree}</label>
      </div>
      <div className={styles.inputWrap}>
        <label><input type='checkbox' className={styles.checkbox} value='categoryFour' />{categoryFour}</label>
      </div>
      <div className={styles.inputWrap}>
        <label><input type='checkbox' className={styles.checkbox} value='categoryFive' />{categoryFive}</label>
      </div>
      <div className={styles.inputWrap}>
        <label><input type='checkbox' className={styles.checkbox} value='categorySix' />{categorySix}</label>
      </div>
    </fieldset>
  )
}

export default MediumPostFilterOptions
