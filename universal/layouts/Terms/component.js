import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Terms extends React.Component {

  render() {
    return (
      <main id='home' role='main' >
        <ContentPage
          header='Terms'
          sections={[
            {heading: '', paragraphs: [
              "Information collected by PlanMade will be used in the quoting and/or application for life insurance.  This information includes, but is not limited to, name, date of birth, gender, tobacco use, amount of coverage requested, physical address, phone number, email address, health status and prior health conditions.  Additionally, contact information will be used by PlanMade and its employees to contact you regarding your interest in purchasing life insurance through PlanMade.  PlanMade will make every intention and effort to cease all communication with any individual upon verbal or written requests made specifically to us.",
              "PlanMade uses “cookies” to assist in its marketing efforts.",
              "The website is not intended for users under the age of 18.  Additionally, use of the site is prohibited by individuals under 13 years of age."
            ]}
          ]}
        />
      </main>
    )
  }
}

export default Terms
