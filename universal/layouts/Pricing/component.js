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
