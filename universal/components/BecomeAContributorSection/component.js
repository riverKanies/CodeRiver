import React from 'react'
import styles from './styles'
import FeaturedStory from 'components/FeaturedStory'
const title ="Become A Contributor"
const text = ["Say hello. E-mail us at info@thriveglobal.com."]
const label = {"label":"Contact Thrive"}
export const ContributerSection = () => {
    return (
    <section className={styles.SectionContainer}>
        <section className={styles.content}>
          <FeaturedStory title={title} sectionText={text} label={label}/> 
        </section>
    </section> 

  )
}

export default ContributerSection
