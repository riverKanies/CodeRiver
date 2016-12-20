import React from 'react'
import BannerSuper from 'components/BannerSuper'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import styles from './styles'

// Content Import
import bannerImg from './assets/pledge-banner.jpg'
import glassdoorLogo from './assets/glassdoorLogo.svg'
import aboutImg from './assets/about-pledge.jpg'
import badgeImg from './assets/pledge-to-thrive.png'

// Content
const pledgeBanner = {
  title: [
    'Take the', 'Pledge To Thrive'
  ],
  bannerText: `Thrive Global and Glassdoor are partnering to showcase employers who prioritize a thriving workplace.`,
  bannerImage: bannerImg,
  bannerImageOverlay: 'overlayFalse',
  hasButton: true,
  hasContentImage: true,
  contentImage: glassdoorLogo,
  hasContentImageText: true,
  contentImageText: 'in partnership with',
  link: {
    linkText: 'Take The Pledge',
    linkTo: 'https://www.glassdoor.com/employers/solutions/thrive-pledge.htm',
    linkStyle: 'bannerLinkTeal',
    target: '_blank'
  }
}
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
  hasColorBar: 'colorBarFalse',
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
    linkTo: 'https://www.glassdoor.com/employers/solutions/thrive-pledge.htm',
    linkStyle: 'blue',
    target: '_blank'
  }
}

export const CorporatePledgeView = () => {
  return (
    <main role='main' className={styles.corporatePledge}>
      <BannerSuper {...pledgeBanner} />
      <span className={styles.connector} />
      <section className={styles.pledgeContent}>
        <FullWidthTwoCol {...aboutPledge} />
        <FullWidthTwoColSpecial {...pledgeBadge} />
      </section>
    </main>
  )
}

export default CorporatePledgeView
