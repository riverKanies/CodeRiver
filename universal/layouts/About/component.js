import React from 'react'
import styles from './styles'
import TeamSection from 'components/TeamSection'
import OneColTextWithHeader from 'components/OneColTextWithHeader'
import HalfTextOverlay from 'components/HalfTextOverlay'
import MiscSection from 'components/MiscSection'

// Content import
import careersImg from './assets/team.jpg'

// Page Content
const aboutInro = {
  title: 'About Thrive Global',
  hasSubtitle: true,
  subTitle:
    `Thrive Global’s mission is to end the epidemic of stress
    and burnout by offering companies and individuals sustainable, science-based
    solutions to enhance both well-being and performance.`,
  largeCopyContent: true,
  text: [
    `Recent science has shown that the pervasive belief that burnout is the price
     we must pay for success is a delusion. We know, instead, that when we prioritize
     our well-being, our decision-making, creativity and productivity improve
     dramatically.`,
    `Thrive Global's three interconnected core components are: corporate trainings
     and workshops that bring the latest strategies and tools around health and
     well-being to organizations; a media platform that serves as the global hub
     for the conversation about well-being and performance with an emphasis on
     action; and, an e-commerce platform that offers a curated selection of the best
     technology and products for well-being. Together, the three components create
     an integrated platform that empowers people to make sustainable changes to
     their daily lives, going from knowing what to do to actually doing it.`,
    `Thrive Global is committed to accelerating the culture shift that allows
     people to reclaim their lives and move from surviving to thriving.`
  ]
}
const trainersFacilitators = {
  title: 'Our Trainers & Facilitators',
  hasSubtitle: false,
  subTitle: ``,
  largeCopyContent: false,
  text: [
    `And thank you to our incredible Thrive facilitators around the world:
    Veronica Alweiss, Kathy Anderson, Danny Bader, Mithra Bindhu, Jose Caraball,
    Peter Felsmann, Cesar Gamio, Kerry Held, Els van der Helm,
    Shveta Suri Kohli, Amber Krzys, LeeAnn Mallorie, John Marin, Kyoko Miyagawa,
    Chiharu Onishi, David Raynr, Mary Ann Somerville, Steven Terry, Noriko Tsutagawa,
    Rob Ungar, Christopher Vincent, Kim Vincent, Margalit Ward, Cindy Whiston, and Sam Wigan.`
  ]
}
const extendedFamily = {
  title: 'Extended Family',
  hasSubtitle: false,
  subTitle: ``,
  largeCopyContent: false,
  text: [
    `Thrive Global is so grateful to the amazing team who helped
    get us to launch. Thank you to Katherine Bahamonde, Mitchell Bradford III,
    Ross Cooperman, Melanie Deziel, Molly Erdmann, Andrew Fader, Anika George,
    Lance Gould, Levi Gray, Hannah Guzzo, Hannah Kay Herdlinger, Tahir Khan,
    Erin Rosenblum, and Lauren Rothberg for their commitment to every detail
    in getting our company to launch. Our deep thanks and gratitude goes to
    Pia Celestino and Paula Celestino from Crea7ive, Ray Cheng, Stephen Tetreault
    and Gabe Whaley from MSCHF, Omri Bojko and Daria Rose from TVP, and Brandy Lee Camacho,
    Brian Roper, and Ali Iskender Turan from Udacity for their technology expertise
    and innovative product design. Special thanks to Jess Gonchor for designing
    our logo, which so perfectly encapsulates who we are, and to Colleen Lake
    for bringing our beloved Phone Bed to life from her family shop in Milwaukee.
    And many thanks to the entire team at Spartan that helped our internal
    technology team get our platform ready for launch: Benjamin Wald, Jacob Arellano,
    Jonathan Barber, Jonathan Bragdon, Bill Brock, Steve Veltkamp, Andrew Frank,
    Sheldon Grizzle, Tyler Jenks, Justin Kropp, Nick Krzemienski, Sam McDavid,
    Brittany Metzler, Jesse Morris, Travis Palmer, Daniel Searles, Gabe Weaver,
    Beau Wingfield, and Brian Zambrano.`
  ]
}
const careers = {
  postLabel: {
    label: 'Careers',
    labelColor: 'whiteLabel'
  },
  title: 'Join The Thrive Tribe',
  sectionText: [
    `Join the team that is changing the way we work and live. Thrive Global is
    looking for innovative and passionate employees across all our teams--technology
    and engineering, media, sales and marketing, and more. Email us with your resume
    attached at jobs@thriveglobal.com to learn about joining our Thrive Tribe!`
  ],
  url: 'mailto:jobs@thriveglobal.com',
  bgImage: careersImg,
  hasButton: 'buttonFalse',
  button: {
    buttonText: 'Thrive With Us',
    linkTo: 'mailto:jobs@thriveglobal.com',
    buttonStyle: 'white'
  },
  postContentStyle: 'postContent'
}

export const AboutView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <OneColTextWithHeader {...aboutInro} />
      <TeamSection />
      <OneColTextWithHeader {...trainersFacilitators} />
      <OneColTextWithHeader {...extendedFamily} />
      <HalfTextOverlay {...careers} />
      <MiscSection />
    </main>
  )
}

export default AboutView
