import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'
import contentStyles from 'styles/content.css'

import imagePricing from './assets/pricing.jpg'

class Pricing extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={contentStyles.container}>
        <div className={styles.pricingContainer}>
          <div className={styles.contentSection}>
            <p>I deliver code with the same high quality as the professional consultancies that I've worked with. I learned to do software development using industry best practices such as agile product development and test driven software development (TDD).</p>
            <p>While I can deliver the same quality product as a full fledged consultancy, I'm much less expensive because it's just me, there's no bussiness overhead. This means that I can offer much lower budget options for entrepreneurs that want a prototype or minimum viable product (MVP) app to validate their bussiness model and help secure funding.</p>
            <p>Ready to make your dream a reality? Click below to get in contact with me.</p>
          </div>
          <div id="test" className={styles.imageSection}>
            <div className={styles.frame} >
              <div className={styles.triangle} />
              <img className={styles.image} src={imagePricing} />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Pricing
