import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

import imagePlugin from './assets/plugin.png'
import imagePiechart from './assets/piechart.png'
import imageTrophy from './assets/trophy.png'

class Brokers extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Brokers'
          subheader='The best life insurance products.  Now for everyone.'
          icons={[
            {image: imagePlugin, caption: 'Our partnerships with benefits technology platforms bring a seamless experience to your customers.'},
            {image: imagePiechart, caption: 'Diversify revenue streams while partnering with a worksite platform that outpaces the competition.'},
            {image: imageTrophy, caption: 'A benefit your customers want: over 72% of working Americans admit they need more life insurance.'}
          ]}
          sections={[
            {heading: 'Bring better benefits to the table', body: "Worksite benefits play an important role in the benefits package you offer your clients.  However, top-notch term life insurance largely missed the boat.  Seventy-two percent of the workforce admits they need more life insurance but they don’t know where to turn.  PlanMade is bridging the gap between top financial products and the individuals that need them most."},
            {heading: "Higher conversion", body: "Less than 20% of employees that elect over the guarantee issue amount on group term life insurance actually complete Evidence of Insurability.  However, over 85% of individuals that elect PlanMade during open enrollment complete underwriting, oftentimes without a medical exam.  Offering employees life insurance doesn’t stop after they elect coverage, and PlanMade is here to help them cross the finish line."},
            {heading: "Integration at the click of a button", body: "Planmade’s partnerships with leading benefits technology platforms mean implementation has never been easier.  The products offered through PlanMade are individually owned and underwritten, which means there are no more renewals or carrier marketing.  We’re taking this annual burden off your plate so you can get back to the things that drive revenue."},
          ]}
          links={[
            {label: 'Employees', url: '/employees'},
            {label: 'Employers', url: '/employers'}
          ]}
        />
      </main>
    )
  }
}

export default Brokers
