import React from 'react'
import ContentPage from 'components/ContentPage'

import styles from './styles'

class Pricing extends React.Component {

  render() {
    return (
      <main id='home' role='main'>
        <ContentPage
          sections={[
            {
              heading: "I deliver high quality code, but I also offer affordable options",
              paragraphs: [
                "I deliver code with the same high quality as the professional consultancies that I've worked with. I learned to do software development using industry best practices such as agile product development and test driven software development (TDD).",
                "While I can deliver the same quality product as a full fledged consultancy, I'm much less expensive because it's just me, there's no bussiness overhead. This means that I can offer much lower budget options for entrepreneurs that want a prototype or minimum viable product (MVP) app to validate their bussiness model and help secure funding.",
                "Ready to make your dream a reality? Click below to get in contact with me."
              ]
              // paragraphs: [
              //   "Many consultancies will charge a minimum of $25,000 for an MVP or prototype app. I can deliver the same product for under $10,000.",
              //   "I've worked at professional consultancies and I deliver code of the same quality. However, my independent consulting bussiness has much less overhead, so I can take on smaller projects. This allows me to work with entrepreneurs on a budget. I can get a prototype up and running for testing, validation, and investment purposes, for under $5,000.",
              //   "My base rate for a new app involving user management is $2,500. However, I do offer hourly work at $100/hr for smaller projects or features on existing platforms.",
              // ]
            }
          ]}
          links={[
            {url: "./contact", label: "Ask me for an Estimate"},
          ]}
        />
      </main>
    )
  }
}

export default Pricing
