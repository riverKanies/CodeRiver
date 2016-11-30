// PartnerWithUs
import React from 'react'
import styles from './styles'
import { Link } from 'react-router'
import Arianna from './assets/Arianna_Huffington.jpg'
import newApproach from './assets/new_approach.png'
import ourExperts from './assets/our_experts.png'
import mockUp from './assets/Mock-up.png'
import corpPic from './assets/corp.jpg'
import stats from './assets/stats.png'
import content1050 from './assets/content_1050.png'
import commerceHero from './assets/commerce_hero.png'
import commerceTxt from './assets/commerce_1340.png'


class Wrapper extends React.Component {
  
  componentWillMount () {
    document.body.style.backgroundColor = '#fff';
    document.body.style.minWidth = '1400px';
  }

  render () {
    return (
      <main role='main' className={styles.partnerWithUs}>
        {this.props.children}
      </main>
    )
  }
}

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
          accelerating the culture shift that allows people to reclaim their lives and move from merely surviving to thriving.`,
  headerNode1: 'Our Core Components',
  node2: [
    {
      header: 'Corporate',
      link: '/partners/corporate',
      body: `Thrive’s corporate program brings the latest
            strategies and tools around health and
            well-being to organizations, inspiring and 
            accelerating a thriving corporate culture.`
    },
    {
      header: 'Content',
      link: '/partners/content',
      body: `Thrive’s corporate program brings the latest
            strategies and tools around health and
            well-being to organizations, inspiring and 
            accelerating a thriving corporate culture.`
    },
    {
      header: 'Commerce',
      link: '/partners/commerce',
      body: `Thrive’s corporate program brings the latest
            strategies and tools around health and
            well-being to organizations, inspiring and 
            accelerating a thriving corporate culture.`
    }
  ],
  node3: `The combination of corporate, content, and commerce differentiates 
          Thrive Global by reaching people at work, at home, and through 
          the technology they use. More than living. Thriving.`,
  headerNode2: 'A New Approach to Well-Being',
  headerNode3: 'Our Experts'
};

const ContentContent = {
  text: 'Thrive Global’s Media Platform, The Hub for Thriving.'
};

const CorporateContent = {
  text: 'When your people thrive, your business thrives.'
};

const CommerceContent = {
  text: 'The Destination for Well-Being Products.'
};

export const PWUOverview = ({text}) => (
  <Wrapper>
    <div className={styles.Overview}>
      <Header image={Arianna} text={OverviewContent.header.text} />
      <p className={styles.p1}> {OverviewContent.node1} </p>
      <h2 className={styles.h2_1}> {OverviewContent.headerNode1}</h2>
      <ul className={styles.threeCol}>
      {
        OverviewContent.node2.map( node =>
           <li key={node.header} className={styles.leftBorder}>
            <Link to={node.link}>
              <h4> {node.header} </h4>
              <p className={styles.normalText}> {node.body} </p>
            </Link>
           </li>
        )
      }
      </ul>
      <p className={styles.p2}> {OverviewContent.node3} </p>
      <div className={styles.container1}>
        <div className={styles.rectangle1}>
          <h2 className={styles.h2_2}> {OverviewContent.headerNode2}</h2>
        </div>
        <div className={styles.newApproach} style={{ backgroundImage: `url(${newApproach})` }}></div>
      </div>

      <div className={styles.container2}>
        <div className={styles.rectangle2}>
          <h2 className={styles.h2_2}> {OverviewContent.headerNode3}</h2>
        </div>
        <div className={styles.ourExperts} style={{ backgroundImage: `url(${ourExperts})` }}></div>
      </div>      
    </div>
    <div className={styles.container3}>
      <p className={styles.p3}> Interested in learning more? </p>
      <p className={styles.p3}> Please direct inquiries to <a href='mailto:kfriedrich@thriveglobal.com'>kfriedrich@thriveglobal.com</a> </p>
    </div>
  </Wrapper>
)

export const PWUCorporate = () => (
  <Wrapper>
    <div className={styles.Corporate}>
      <Header image={corpPic} text={CorporateContent.text} />
      <div className={styles.corpTxt} style={{ backgroundImage: `url(${stats})` }}></div>
      <div className={styles.container4}>
        <p className={styles.p3}> Interested in learning more? </p>
        <p className={styles.p3}> Please direct inquiries to <a href='mailto:kfriedrich@thriveglobal.com'>kfriedrich@thriveglobal.com</a> </p>
      </div>            
    </div>
  </Wrapper>
)

export const PWUContent = () => (
  <Wrapper>
    <div className={styles.Content}>
      <Header image={mockUp} text={ContentContent.text} />
      <div className={styles.contentTxt} style={{ backgroundImage: `url(${content1050})` }}></div>
      <div className={styles.container3}>
        <p className={styles.p3}> Interested in learning more? </p>
        <p className={styles.p3}> Please direct inquiries to <a href='mailto:kfriedrich@thriveglobal.com'>kfriedrich@thriveglobal.com</a> </p>
      </div>        
    </div>
  </Wrapper>
)

export const PWUCommerce = () => (
  <Wrapper>
    <div className={styles.Commerce}>
      <Header image={commerceHero} text={CommerceContent.text} />
      <div className={styles.commerceTxt} style={{ backgroundImage: `url(${commerceTxt})` }}></div>
        <div className={styles.container3}>
          <p className={styles.p3}> Interested in learning more? </p>
          <p className={styles.p3}> Please direct inquiries to <a href='mailto:kfriedrich@thriveglobal.com'>kfriedrich@thriveglobal.com</a> </p>
        </div>
      </div>      
  </Wrapper>
)
