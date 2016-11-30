import React from 'react'
import styles from './styles'

// Component Import
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import FeaturedProduct from 'components/FeaturedProduct'
import FeaturedStory from 'components/FeaturedStory'
import HalfTextOverlay from 'components/HalfTextOverlay'
import QuoteSection from 'components/QuoteSection'

// Content Import
import foundationImg from './assets/thrive-foundation.jpg'
import appsImg from './assets/thrive-apps.jpg'
import popUpImg from './assets/thrive-popup.jpg'
import eCourseImg from './assets/thrive-ecourse.png'
import artImg from './assets/thrive-art.jpg'
import styleImg from './assets/thrive-style.jpg'

// Content Definitions
const thrivePulse = {
  bgColor: 'teal',
  author: '',
  label: 'Get Started',
  title: 'What\'s Your Thrive Pulse?',
  asset: 'pulseImg',
  details: `Begin with the Thrive Pulse, our 10-question assessment that will
    help you take stock of your life and identify areas of improvement.`,
  externalLink: {
    linkText: 'Get Your Thrive Pulse',
    linkTo: '/pulse',
    linkStyle: 'white'
  }
}
const eCourse = {
  bgImage: eCourseImg,
  url: 'https://learn.thriveglobal.com',
  sectionClass: 'transparent',
  title: 'The Thrive E-Course',
  postLabel: {
    label: 'Grow',
    labelColor: 'whiteLabel'
  },
  sectionText: [
    `The six-week online course with Arianna Huffington helps you move from
     surviving to thriving. The course uses scientifically proven methods to
     decrease stress and burnout and improve your overall health, happiness
     and well-being. Guest teachers include Kobe Bryant, Wharton Professor
     Adam Grant, Warby Parker CEO Dave Gilboa, and more.`
  ],
  image: eCourseImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Take the e-Course',
    linkTo: 'https://learn.thriveglobal.com',
    buttonStyle: 'white'
  }
}
const homeQuote = {
  bgColor: 'default',
  quote: [
    `It’s no mystery that healthier workforces make for better corporate
    financial health and higher performing employees all around.`
  ],
  citation: `Dr. David Agus,
    \n Professor of Medicine & Engineering USC,
    \n Thrive Global board member`,

  imageShape: 'roundImage'
}
const pathways = {
  bgColor: 'blue',
  author: '',
  hasAuthor: 'authorFalse',
  hasLabel: 'labelTrue',
  details: [
    `Thrive Global is all about action – going from knowing what to do to actually
    doing it.  Begin by taking your Thrive Pulse.  Explore our pathways, journeys
    and microsteps that will collectively make a transformational impact on your
    day-to-day well-being and performance.  Go deeper with our e-course.
    Whatever your entry point is, take it.`
  ],
  title: 'Pathways, Journeys, & Microsteps',
  asset: 'string',
  label: 'Grow',
  externalLink: {
    linkText: 'Take the First Step',
    linkTo: '/grow',
    linkStyle: 'white'
  }
}
const thriveApps = {
  sectionClass: 'default',
  title: 'Thrive Apps & Podcasts',
  hasLabel: 'labelTrue',
  label: {
    label: 'Apps',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Thrive's series of signature apps helps you unplug, recharge, and set
    boundaries in your relationship with technology. So you can disconnect
    from technology and reconnect with what really matters.`
  ],
  image: appsImg,
  hasButton: 'buttonTrue',
  link: {
    linkText: 'Get the Apps',
    linkTo: '/apps',
    linkStyle: 'blue'
  }
}
const thriveStyle = {
  sectionClass: 'transparent',
  title: 'Thrive Style',
  hasLabel: 'labelTrue',
  label: {
    label: 'Thrive Style',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Thrive Style is all about helping women close the style gap and open up
    more time for productivity, creativity and recharging. ThriveStyle is
    about redefining conventions so that women can feel confident,
    professional and great in something other than 5-inch heels and a new
    outfit for every occasion. Our first campaign: to normalize – actually
    celebrate – repeats, helping women feel as comfortable as men do repeating
    outfits.`
  ],
  image: styleImg,
  hasButton: 'buttonTrue',
  link: {
    linkText: 'Read More',
    linkTo: 'https://medium.com/@ariannahuff/7585234da618#.t2phr2e2o',
    linkStyle: 'blue'
  }
}
const thrivePoetry = {
  bgColor: 'teal',
  author: '',
  label: 'Wisdom',
  title: 'Poetry & Philosophy',
  asset: '',
  details: [
    `Philosophy is not an academic exercise. “What is a good life?” has been a
    question asked by philosophers going back to the ancient Greeks. But
    somewhere along the line we abandoned that question and shifted our
    attention to success, and over time our society’s notion of success
    has been reduced to money and status. Both philosophy and poetry add
    perspective to our lives and remind us to ask life’s bigger questions.
    They’ll both be featured prominently in The Thrive Journal. Read the
    poetry of Mark Nepo at The Thrive Journal.`
  ],
  externalLink: {
    linkText: 'Read More',
    linkTo: 'https://journal.thriveglobal.com/search?q=poetry',
    linkStyle: 'white'
  }
}
const deathOverDinner = {
  bgColor: 'blurple',
  author: '',
  hasAuthor: 'authorFalse',
  hasLabel: 'labelFalse',
  details: [
    `Yes, really.  We have, if we’re lucky, about thirty thousand days to play
    the game of life. How we play it will be determined by what we value.
    Thrive and VICE are partnering with not-for-profit Death Over Dinner to
    launch a global conversation about mortality and life's biggest questions.`
  ],
  title: 'Let\'s Have Dinner and Talk About Death',
  asset: 'string',
  label: 'Wonder',
  externalLink: {
    linkText: 'Learn More',
    linkTo: 'https://journal.thriveglobal.com/michael-hebb-death-over-dinner-38ae6553d21b#.meoi8cu4n',
    linkStyle: 'white'
  }
}
const thriveArt = {
  sectionClass: 'default',
  title: 'Art & Wonder',
  hasLabel: 'labelTrue',
  label: {
    label: 'Wonder',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Art, as philosopher Alain de Botton says, is "an apothecary for the soul."
     It  ignites a deeper truth and awakens the sense of wonder that slumbers
     within us. The Thrive Journal will proudly feature art and artists from
     around the world to inspire that connectedness. See work from artists
     Tris hla Jain and Isabella Huffington at The Thrive Journal.`
  ],
  image: artImg,
  hasButton: 'buttonTrue',
  link: {
    linkText: 'Learn More',
    linkTo: 'https://medium.com/@ariannahuff/30d21640ab0b#.bkyick4i5',
    linkStyle: 'blue'
  }
}
const thriveFoundation = {
  sectionClass: 'default',
  title: 'Thrive Foundation',
  hasLabel: 'labelTrue',
  label: {
    label: 'Thrive',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Giving is not only a fundamental part of a full life – it is a
    scientifically proven way to increase our well-being and happiness. The
     Thrive Foundation will offer free Thrive Global trainings to non-profit
     and civic leaders who are on the front line of serving others.`
  ],
  image: foundationImg,
  hasButton: 'buttonTrue',
  link: {
    linkText: 'Learn More',
    linkTo: '/give',
    linkStyle: 'blue'
  }
}
const popUpShop = {
  sectionClass: 'transparent',
  title: 'The Thrive Pop-Up Shop',
  label: {
    label: 'Happy Holidays!',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Thrive Global's retail pop-up store in New York City offers live
    demonstrations, education and trials of the latest products and
    technologies across the categories of mind, body, sleep, productivity,
    recharging, creativity and giving. Visit us at 419 Broome Street seven
    days a week, from 10:00am to 7:00pm, December 1 through January 15, 2017.`
  ],
  image: popUpImg,
  link: {
    linkText: 'Learn More',
    linkTo: '/popup',
    linkStyle: 'blue'
  }
}

export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumPostGridDynamic />
      <FeaturedProduct />
      <FeaturedStory {...thrivePulse} />
      <HalfTextOverlay {...eCourse} />
      <QuoteSection {...homeQuote} />
      <FeaturedStory {...pathways} />
      <FullWidthTwoCol {...thriveApps} />
      <FullWidthTwoColSpecial {...thriveStyle} />
      <FeaturedStory {...deathOverDinner} />
      <FullWidthTwoCol {...thriveArt} />
      <FeaturedStory {...thrivePoetry} />
      <FullWidthTwoCol {...thriveFoundation} />
      <FullWidthTwoColSpecial {...popUpShop} />
    </main>
  )
}

export default HomeView
