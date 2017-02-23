import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Licenses extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Licenses'
          sections={[
            {heading: 'PlanMade is offered through my employer.  Who should I contact about my policy?', paragraphs: [
              "Our company, and all pertinent individuals, hold insurance agent licenses in the states in which we solicit business.  All insurance applications are solicited by Life Canopy, LLC d/b/a PlanMade via Chris Thompson, CEO and Principal.",
              "Tennessee: License # 2351967, 2333002"
            ]},
          ]}
        />
      </main>
    )
  }
}

export default Licenses
