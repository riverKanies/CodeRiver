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

export const CorporatePledgeView = () => {
  return (
    <main role='main' className={styles.corporatePledge}>
      <FullWidthTwoCol {...aboutPledge} />
      <FullWidthTwoColSpecial />
    </main>
  )
}

export default CorporatePledgeView
