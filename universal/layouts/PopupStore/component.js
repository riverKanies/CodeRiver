// Engage Parent Page
import React from 'react'
import styles from './styles'
import FullWidthTwoColLeft from 'components/FullWidthTwoColLeft'
import FullWidthTwoColRight from 'components/FullWidthTwoColRight'
import TwoColImage from 'components/TwoColImage'
import Banner from 'components/Banner'

import mapImg from './assets/419broome.png'
// import ourPic1 from './assets/419broome.png'
// import ourPic2 from './assets/419broome.png'

const ourPic1 = 'http://placekitten.com/g/647/470'
const ourPic2 = 'http://placekitten.com/g/647/470'

const banner = {
  title: 'Thrive Global Pop-up store',
  height: 'quarterHeight'
}

const info = {
  sectionClass: 'default',
  title: 'Welcome!',
  sectionText: [
    `- Date: December 1 to January 15
    - Hours: 10am to 7pm, daily
    - Phone: xxx-xxx-xxxx
    - Email: retail@thriveglobal.com
    * Closed December 25 and January 1`
  ],
  image: mapImg
}

const ourBrands = {
  sectionClass: 'default',
  title: 'Preview Our Brands In-Store',
  sectionText: [
    `- One brand
    - another
    - and another`
  ],
  image: mapImg
}

const specialEvents = {
  sectionClass: 'default',
  title: 'Join Us for Special Events',
  sectionText: [
    `- first event
    - another
    - and another`
  ],
  image: mapImg
}

const ourPics = {
  // title: string,
  colOneImg: ourPic1,
  colTwoImg: ourPic2
}

const hostAnEvent = {
  sectionClass: 'default',
  title: 'Host an event at the Thrive Global Pop-up Store',
  sectionText: [
    `Please contact @monica@thriveglobal.com if you want to host an event.`
  ],
  image: mapImg
}

// Popup Page Layout
export const PopupStoreView = () => (
  <main role='main' className={styles.popupStore}>
    <Banner {...banner} />
    <FullWidthTwoColLeft {...info} />
    <FullWidthTwoColRight {...ourBrands} />
    <FullWidthTwoColLeft {...specialEvents} />
    <TwoColImage {...ourPics} />
    <FullWidthTwoColLeft {...hostAnEvent} />
  </main>
)

export default PopupStoreView
