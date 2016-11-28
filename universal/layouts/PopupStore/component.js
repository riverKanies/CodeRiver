// Engage Parent Page
import React from 'react'
import styles from './styles'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import FullWidthTwoColLeft from 'components/FullWidthTwoColLeft'
import FullWidthTwoColRight from 'components/FullWidthTwoColRight'
import TwoColImage from 'components/TwoColImage'
import Banner from 'components/Banner'

import mapImg from './assets/419broome.png'
import ourPic1 from './assets/419broome.png'
import ourPic2 from './assets/419broome.png'

const banner = {
  title: 'Thrive Global Pop-up store',
  height: 'quarterHeight'
}

// const map = {
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.861884042863!2d-74.00099998459477!3d40.72105687933087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598913d4e8d1%3A0x2da9d46060e7c577!2s419+Broome+St%2C+New+York%2C+NY+10013!5e0!3m2!1sen!2sus!4v1480173985638" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
// }

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
  image: mapImg,
}

const ourBrands = {
  sectionClass: 'default',
  title: 'Preview Our Brands In-Store',
  sectionText: [
    `- One brand
	- another
	- and another`
  ],
  image: mapImg,
}

const specialEvents = {
  sectionClass: 'default',
  title: 'Join Us for Special Events',
  sectionText: [
    `- first event
	- another
	- and another`
  ],
  image: mapImg,
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
  image: mapImg,
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
