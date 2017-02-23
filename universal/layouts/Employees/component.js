import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

import imageLocked from './assets/locked.png'
import imageWallet from './assets/wallet.png'
import imageSettings from './assets/settings.png'
import imageClock from './assets/clock.png'

class Employees extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Employees'
          subheader='The best life insurance products.  Now for everyone.'
          icons={[
            {image: imageLocked, caption: 'Our bank level encryption means your personal information is safe with us.'},
            {image: imageWallet, caption: 'Our real-time marketplace comparison makes it easy to put money back in your pocket.'},
            {image: imageSettings, caption: 'Craft a tailored plan based on your current health and financial goals.'},
            {image: imageClock, caption: '85% of customers have a policy in-hand within 10 days.'}
          ]}
          sections={[
            {heading: 'The best in financial protection', body: "Providing meaningful financial protection for your family has never been easier.  With access to products from more than 20 insurance companies,  you now have the best products at your fingertips."},
            {heading: "Full Transparency", body: "We believe you should know your options before you buy.  By providing instant quotes from the top-rated carriers in the market, you know you’re getting the best life insurance rate for your unique needs."},
            {heading: "Policy in days, not weeks", body: "Most of our customers get approved within 48 hours without any medical exam and have a policy in-hand within 10 days.  Why wait 8+ weeks for the coverage your family needs?"},
            {heading: "Tailored plan just for you", body: "We believe your life insurance plan should fit your needs.  PlanMade works hard to find the perfect policy for you based on your current health and financial needs."},
            {heading: "You don’t pay until you’re happy", body: "You won’t pay a dime until you’re completely satisfied.  To take this a little further, you’re allowed a free-look period of 10 days in most states, which just means you can get a full refund for 10 days after you’ve paid if you aren’t happy."}
          ]}
          links={[
            {label: 'Employers', url: '/employers'},
            {label: 'Brokers', url: '/brokers'}
          ]}
        />
      </main>
    )
  }
}

export default Employees
