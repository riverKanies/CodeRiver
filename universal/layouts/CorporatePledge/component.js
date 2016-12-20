import React from 'react'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import styles from './styles'

// Content Import
// import bannerImg from './assets/pledge-banner.jpg'
// import glassdoorLogo from './assets/glassdoorLogo.svg'
import aboutImg from './assets/about-pledge.jpg'
import badgeImg from './assets/pledge-to-thrive.png'

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
  image: aboutImg,
  hasButton: false
}

const pledgeBadge = {
  sectionClass: 'transparent',
  title: 'Get the Badge',
  hasLabel: false,
  hasColorBar: 'colorBarTrue',
  sectionText: [
    `Set your company apart by letting your employees and those you are recruiting
    know that this is a workplace that gets it about well-being and understands the
    connection between thriving employees and a thriving business.`, `Any employer who
    takes the pledge can also promote it on their Glassdoor company profile to showcase
    their commitment to employee well-being as part of their employer brand.`
  ],
  image: badgeImg,
  hasButton: true,
  link: {
    linkText: 'Get Started',
    linkTo: 'javascript:void(0)',
    linkStyle: 'blue',
    target: '_blank'
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
