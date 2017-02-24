import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class About extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='About Us'
          subheader='PlanMade exists to fundamentally change the insurance experience.'
          sections={[
            {heading: 'A little history', body: 'Founded in 2016, PlanMade provides the best individual life insurance products to employees all across the country.  Our corporate headquarters are in Chattanooga, Tennessee.'},
            {heading: "Why we’re here", paragraphs: [
              "Everybody at PlanMade views insurance and personal finance a little differently.  At our core, we believe the best insurance and financial products should be available to every individual and family.",
              "We place full transparency, accessibility, ease of use, and complete satisfaction at the forefront of our interactions with customers and strategic partners.",
              "There’s a better way to get insured.  We’re here to make it happen."
            ]}
          ]}
          links={[
            {label: 'Get a Quote', url: '/quote'},
            {label: 'Partnerships', url: '/partnerships'}
          ]}
        />
      </main>
    )
  }
}

export default About
