import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class OurMission extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Our Mission'
          subheader='Planmade set out to change an industry.'
          paragraphs={[
            "This sounds great, but how are we going to do it?",
            "We believe you should be able to buy life insurance without sitting down with an agent. We have the ability to provide a quote instantly from the top-rated carriers in the market. If you like what you see, you can start your application immediately. In many scenarios, your policy is delivered to you electronically within 48 hours.",
            "We believe you should be treated like a human, not a sales objective. We believe you’re intelligent enough to know what amount of financial protection is necessary for your family. If you would like help in determining what might be best, we can assist. But rest assured, we’re only offering guidance we apply in our own lives. We understand you have many life insurance options, but we work hard to be the best.",
            "Lastly, we believe life insurance is one of the easiest ways to provide much needed financial protection for your family. Far too few individuals own life insurance (only 25% of Americans own individual coverage), and we believe this needs to change. An easier way to buy is a step in the right direction."
          ]}
          footNote="We have many industry-shaking things occurring behind the scenes. Stay tuned for some big news—we’ll be excited to share it."
        />
      </main>
    )
  }
}

export default OurMission
