import React from 'react'
import styles from './styles'
import MediumPostFilterOptions from '../MediumPostFilterOptions'

type Props = {
  filterText: String
};

const MediumPostFilter = ({
  filterText = 'Latest From Thrive Global'
  }: Props) => {
  return (
    <section className={styles.postFilter}>
      <div className={styles.filterContainer}>
        <header>
          <h2>{filterText}</h2>
        </header>
        <form className={styles.filter}>
          <MediumPostFilterOptions />
          <input type='submit' value='Apply Filter' />
        </form>
      </div>
    </section>
  )
}

export default MediumPostFilter