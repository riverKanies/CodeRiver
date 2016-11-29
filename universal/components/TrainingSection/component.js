import React from 'react'
import styles from './styles'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
const title ="Train With Us"
const text = ["Interested in bringing Thrive trainings to your workplace or nonprofit organization? Email our director of trainings Joey Hubbard at jh@thriveglobal.com."]
const label = {"label":"Training"}
export const TrainingSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <FullWidthTwoCol title={title} sectionText={text} label={label}/> 
        </section>
    </section> 

  )
}

export default TrainingSection
