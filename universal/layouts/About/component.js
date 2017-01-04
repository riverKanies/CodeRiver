/* @flow */
import React from 'react'
import styles from './styles'
import TextBanner from 'components/TextBanner'
import FullBleedImage from 'components/FullBleedImage'
import FullWidthText from 'components/FullWidthText'
import ThreeColHeader from 'components/ThreeColHeader'
import QuoteSection from 'components/QuoteSection'
import ThriveExperts from 'components/ThriveExperts'

// Content import
import AHBanner from './assets/ariannaHuffington.jpg'

// Page Content
const textBanner = {
  bgColor: 'default',
  hasTitle: 'titleTrue',
  hasDivider: 'dividerFalse',
  titleFont: 'playfair',
  title: 'About Thrive Global',
  subTitle: 'More than living. Thriving.'
}
const bannerIMG = {
  image: AHBanner,
  altText: 'About Thrive Global'
}
const introText = {
  sectionClass: 'white',
  divider: 'dividerFalse',
  sectionWidth: 'halfWidth',
  textAlign: 'textLeft',
  header: 'headerFalse',
  sectionText: [
    `Thrive Global’s mission is to end the stress and burnout epidemic
    by offering companies and individuals sustainable, science-based solutions to
    enhance both well-being and performance. Recent science has shown that the
    pervasive belief that burnout is the price we must pay for success is a delusion.
    We know, instead, that when we prioritize our well-being, our decision-making,
    creativity, and productivity improve dramatically. Thrive Global is committed to
    accelerating the culture shift that allows people to reclaim their lives and move
    from merely surviving to thriving.`
  ]
}
const coreComponents = {
  bgColor: 'grayPattern',
  title: 'Our Core Components',
  colOne: {
    title: 'Corporate',
    text: [
      `Thrive’s corporate program brings the latest strategies and tools
      around health and well-being to organizations, inspiring and accelerating
      a thriving corporate culture.`
    ]
  },
  colTwo: {
    title: 'Content',
    text: [
      `Thrive’s media platform serves as the global hub for the conversation
        about well-being and performance, with an emphasis on action and
        featuring original, expert, and community content.`
    ]
  },
  colThree: {
    title: 'Commerce',
    text: [
      `Thrive’s e-commerce platform offers a curated selection of the best
      technology and products to equip consumers with the most effective tools for well-being.`
    ]
  },
  hasFooter: true,
  footerText: [
    `The combination of corporate, content, and commerce differentiates Thrive
    Global by reaching people at work, at home, and through the technology they
    use. More than living. Thriving.`
  ]
}
const aboutQuote = {
  bgColor: 'white',
  containerBorders: 'bordersFalse',
  byElement: 'hideBy',
  quoteFont: 'Playfair',
  quote: [
    `Whatever your entry point is, take it. Come for the performance-enhancing
    benefits, stay for life-enhancing opportunities.`
  ],
  citation: '—Arianna Huffington',
  hasImage: 'imageTrue'
}

export const AboutView = () => {
  return (
    <main role='main' className={styles.aboutPage}>
      <TextBanner {...textBanner} />
      <FullBleedImage {...bannerIMG} />
      <FullWidthText {...introText} />
      <ThreeColHeader {...coreComponents} />
      <QuoteSection id={styles.quote} {...aboutQuote} />
      <ThriveExperts />
      <section className={styles.learnMore}>
        <div className={styles.container}>
          <h3>Interested in learning More?</h3>
          <p>Please direct inquiries to
            <a href='mailto:kfriedrich@thriveglobal.com' target='_self'> kfriedrich@thriveglobal.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default AboutView
