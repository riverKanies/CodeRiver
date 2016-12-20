import React from 'react'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import styles from './styles'

// Content
const aboutPledge = {
  sectionClass: 'default',
  title: 'About The Thrive Pledge',
  hasLabel: false,
  sectionText: [
    `Well-being can take many forms -- helping employees set boundaries with technology,
    creating polices that support their need to disconnect, promoting the use of stress
    and mental well-being resources, encouraging and incentivizing employees to get more
    sleep and take regular breaks, and offering meaningful opportunities for employees
    to volunteer and give back, which has been shown to increase happiness, purpose
    and engagement.`, `Join the thousands of business leaders who are taking the Pledge to Thrive.`
  ],
  image: 'string',
  hasButton: false
}
const pledgeBadge = {
  sectionClass: 'default',
  title: 'Get the Badge',
  hasLabel: false,
  sectionText: [
    `Set your company apart by letting your employees and those you are recruiting
    know that this is a workplace that gets it about well-being and understands the
    connection between thriving employees and a thriving business.`, `Any employer who
    takes the pledge can also promote it on their Glassdoor company profile to showcase
    their commitment to employee well-being as part of their employer brand.`
  ],
  image: 'string',
  hasButton: true,
  link: {
    linkText: 'string',
    linkTo: 'string',
    linkStyle: 'string',
    target: 'string'
  }
}

export const CorporatePledgeView = () => {
  return (
    <main role='main' className={styles.corporatePledge}>
      <FullWidthTwoCol {...aboutPledge} />
      <FullWidthTwoColSpecial {...pledgeBadge} />
    </main>
  )
}

export default CorporatePledgeView
