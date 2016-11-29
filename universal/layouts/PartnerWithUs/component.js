// PartnerWithUs
import React from 'react'
import styles from './styles'
import Arianna from './assets/Arianna_Huffington-19.jpg'


const Wrapper = ({children}) => (
  <main role='main' className={styles.partnerWithUs}>
    {children}
  </main>
)

const Header = ({ image, text }) => (
  <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.text}>
      {text}
    </div>
  </header>
)

const OverviewContent = {
  header: {
    text: 'More than living. Thriving.'
  },
  node1: `Thrive Global’s mission is to end the stress and burnout epidemic by offering companies and individuals sustainable, 
          science-based solutions to enhance both well-being and performance. Recent science has shown that the pervasive 
          belief that burnout is the price we must pay for success is a delusion. We know, instead, that when we prioritize our 
          well-being, our decision-making, creativity, and productivity improve dramatically. Thrive Global is committed to 
          accelerating the culture shift that allows people to reclaim their lives and move from merely surviving to thriving.`
};

const CorporateContent = {
  text: 'More than living. Thriving.'
};

const ContentContent = {
  text: 'More than living. Thriving.'
};

const CommerceContent = {
  text: 'More than living. Thriving.'
};

export const PWUOverview = ({text}) => (
  <Wrapper>
    <div className={styles.Overview}>
      <Header image={Arianna} text={OverviewContent.header.text} />
      <p className={styles.smallNode}> {OverviewContent.node1} </p>
    </div>
  </Wrapper>
)

export const PWUCorporate = () => (
  <Wrapper>
    <div className={styles.Corporate}>
      <Header image={Arianna} text={CorporateContent.text} />
    </div>
  </Wrapper>
)

export const PWUContent = () => (
  <Wrapper>
    <div className={styles.Content}>
      <Header image={Arianna} text={ContentContent.text} />
    </div>
  </Wrapper>
)

export const PWUCommerce = () => (
  <Wrapper>
    <div className={styles.Commerce}>
      <Header image={Arianna} text={CommerceContent.text} />
    </div>
  </Wrapper>
)
