import React from 'react'
import styles from './styles'
import ScienceItem from 'components/ScienceItem'
import FullWidthTwoCol from 'components/FullWidthTwoCol'


const title = "About Thrive Global"
const label = {"label": "About Thrive"}
const text = ["Thrive Global’s mission is to end the epidemic of stress and burnout by offering companies and individuals sustainable, science-based solutions to enhance both well-being and performance. Recent science has shown that the pervasive belief that burnout is the price we must pay for success is a delusion. We know, instead, that when we prioritize our well-being, our decision-making, creativity and productivity improve dramatically."]
export const AboutSection = () => {
    return (

    <section className={styles.SectionContainer}>
      <FullWidthTwoCol title={title} sectionText={text} label={label}/>
    </section> 

  )
}

export default AboutSection
