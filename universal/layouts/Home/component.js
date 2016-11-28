import React from 'react'
import styles from './styles'
import MediumPostGridDynamic from 'components/MediumPostGridDynamic'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColSpecial from 'components/FullWidthTwoColSpecial'
import FeaturedProduct from 'components/FeaturedProduct'
import FeaturedStory from 'components/FeaturedStory'
import HalfTextOverlay from 'components/HalfTextOverlay'
import QuoteSection from 'components/QuoteSection'

import pulseImg from './assets/pulse.jpg'
import pathwayImg from './assets/pathway.jpg'
import pathwaysImg from './assets/pathways.png'
import listenImg from './assets/listen.jpg'
import foundationImg from './assets/foundation.jpg'
import popUpImg from './assets/popup.jpg'
import eCourseImg from './assets/ecourse.png'
import deathOverDinnerImg from './assets/deathOverDinner.png'
import poetryImg from './assets/poetry.png'
import { browserHistory } from 'react-router'

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
  button: {
    buttonText: 'Learn More',
    linkTo: '/popup',
    buttonStyle: 'violet'
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
  // TODO: fix button. Why isn't it showing up?
  button: {
    buttonText: 'Take the e-Course',
    linkTo: 'https://learn.thriveglobal.com',
    buttonStyle: 'violet'
  }
}
const deathOverDinner = {
  bgImage: deathOverDinnerImg,
  url: 'https://learn.thriveglobal.com',
  sectionClass: 'transparent',
  title: 'Let\'s Have Dinner and Talk About Death',
  postLabel: {
    label: 'Wonder',
    labelColor: 'whiteLabel'
  },
  sectionText: [
    `Yes, really.  We have, if we’re lucky, about thirty thousand days to play
    the game of life. How we play it will be determined by what we value.
    Thrive and VICE are partnering with not-for-profit Death Over Dinner to
    launch a global conversation about mortality and life's biggest questions.`
  ],
  image: eCourseImg,
  // TODO: fix button. Why isn't it showing up? Wrong props prolly.
  button: {
    buttonText: 'Learn More',
    linkTo: 'https://learn.thriveglobal.com',
    buttonStyle: 'violet'
  }
}
const homeQuote = {
  bgColor: 'default',
  quote: [
    `It’s no mystery that healthier workforces make for better corporate
    financial health and higher performing employees all around.`
  ],
  // TODO: How do I newline?!
  citation: `Dr. David Agus,
    \n Professor of Medicine & Engineering USC,
    \n Thrive Global board member`,

  // quoteImage: any,
  imageShape: 'roundImage'
}
const thriveFoundation = {
  sectionClass: 'default',
  title: 'Thrive Foundation',
  hasLabel: 'labeltrue',
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
  button: {
    buttonText: 'Learn More',
    linkTo: '/give',
    buttonStyle: 'violet'
  }
}
const thriveAmazon = {
  sectionClass: 'transparent',
  title: 'Thrive & Amazon: Audible & Echo',
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
  image: listenImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Get the Apps',
    linkTo: '/apps',
    buttonStyle: 'violet'
  }
}

const thrivePoetry = {
  sectionClass: 'default',
  title: 'Poetry & Philosophy',
  hasLabel: 'labelTrue',
  label: {
    label: 'Wisdom',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Philosophy is not an academic exercise. “What is a good life?” has been a
    question asked by philosophers going back to the ancient Greeks. But
    somewhere along the line we abandoned that question and shifted our
    attention to success, and over time our society’s notion of success
    has been reduced to money and status. Both philosophy and poetry add
    perspective to our lives and remind us to ask life’s bigger questions.
    They’ll both be featured prominently in The Thrive Journal. Read the
    poetry of Mark Nepo at The Thrive Journal.`
  ],
  image: poetryImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Read more.',
    linkTo: 'https://journal.thriveglobal.com/search?q=poetry',
    buttonStyle: 'violet'
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
  image: pulseImg
}
const thriveStyle = {
  sectionClass: 'default',
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
  image: pathwayImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Get Style',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}

const pathways = {
  sectionClass: 'default',
  title: 'Pathways, Journeys, & Microsteps',
  hasLabel: 'labelTrue',
  label: {
    label: 'Grow',
    labelColor: 'defaultLabel'
  },
  sectionText: [
    `Pathway to Joy Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.`
  ],
  image: pathwaysImg,
  hasButton: 'buttonTrue',
  button: {
    buttonText: 'Take the first step',
    linkTo: 'javascript:void(0)',
    buttonStyle: 'violet'
  }
}

const thrivePulse = {
  // TODO: fix "stories" label. Should be "Get Started"
  // sectionClass: 'transparent',
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

// TODO: GET RID OF THIS POST LAUNCH
if (window.location.pathname === '/') {
  browserHistory.push('/coming-soon')
}
export const HomeView = () => {
  return (
    <main role='main' className={styles.homePage}>
      <MediumPostGridDynamic />
      <FeaturedProduct />
      <FeaturedStory {...thrivePulse} />
      <HalfTextOverlay {...eCourse} />
      <QuoteSection {...homeQuote} />
      <FullWidthTwoCol {...pathways} />
      <FullWidthTwoColSpecial {...thriveAmazon} />
      <FullWidthTwoCol {...thriveStyle} />
      <FullWidthTwoCol {...thrivePoetry} />
      <HalfTextOverlay {...deathOverDinner} />
      <FullWidthTwoCol {...thriveArt} />
      <FullWidthTwoCol {...thriveFoundation} />
      <FullWidthTwoCol {...popUpShop} />
    </main>
  )
}

export default HomeView
