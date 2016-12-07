import React from 'react'
import styles from './styles'

const missionStatement = `Thrive Global’s mission is to end the epidemic of stress
  and burnout by offering companies and individuals sustainable, science-based
  solutions to enhance both well-being and performance.`

const title = 'About Thrive Global'
const text = [
  `Recent science has shown that the pervasive belief that burnout is the price
   we must pay for success is a delusion. We know, instead, that when we prioritize
   our well-being, our decision-making, creativity and productivity improve
   dramatically.`,
  `Thrive Global's three interconnected core components are: corporate trainings
   and workshops that bring the latest strategies and tools around health and
   well-being to organizations; a media platform that serves as the global hub
   for the conversation about well-being and performance with an emphasis on
   action; and, an e-commerce platform that offers a curated selection of the best
   technology and products for well-being. Together, the three components create
   an integrated platform that empowers people to make sustainable changes to
   their daily lives, going from knowing what to do to actually doing it.`,
  `Thrive Global is committed to accelerating the culture shift that allows
   people to reclaim their lives and move from surviving to thriving.`
]

export const AboutSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <section className={styles.content}>

          <header className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
            <h2 className={styles.h2}>{missionStatement}</h2>
          </header>
          <div className={styles.copyContent}>
            {text.map(node =>
              <p>{node}</p>
            )}
          </div>

        </section>
      </div>
    </section>
  )
}

export default AboutSection
