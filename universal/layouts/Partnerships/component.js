import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Partnerships extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Partnerships'
          sections={[
            {heading: "We’re so glad you asked!", paragraphs: [
              "PlanMade is currently available to a select group of folks ranging from benefits technology platforms, employee benefits brokers, and employers.",
              "Our national rollout (with all the necessary announcements) is currently slated for the second half of 2017.",
              "In the meantime, if you’re interested in being a part of our early release we want to know! Please include why your company might be a great early partner (a dash of humor definitely earns extra points)."
            ]}
          ]}
          links={[
            {label: 'Get a Quote', url: '/quote'},
            {label: 'Contact Us', url: '/contactus'}
          ]}
        />
      </main>
    )
  }
}

export default Partnerships
