import React from 'react'
import styles from './styles'
import ScienceItem from 'components/ScienceItem'
import IconWithText from 'components/IconWithText'
import HalfTextOverlay from 'components/HalfTextOverlay'

const label = {"label": "Press"}
const title = "Press"
const text = ["Are you a member of the press seeking information about Thrive Global? Email Monica Lee at monica@thriveglobal.com."]
export const PressSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <section  className={styles.content}>
        <HalfTextOverlay title={title} sectionText={text} postLabel={label} />
      </section>
    </section> 

  )
}

export default PressSection
