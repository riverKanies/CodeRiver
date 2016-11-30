import React from 'react'
import styles from './styles'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
const title ="About Our Logo"
const text = ["Interested in bringing Thrive trainings to your workplace or nonprofit organization? Email our director of trainings Joey Hubbard at jh@thriveglobal.com."]
const label = {"label":"Thrive Logo"}
import imageSrc from "./assets/logo.jpg"
export const AboutOurLogoSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <FullWidthTwoCol title={title} sectionText={text} label={label} image={imageSrc}/> 
        </section>
    </section> 

  )
}

export default AboutOurLogoSection
