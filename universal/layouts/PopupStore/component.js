// Components
import React from 'react'
import styles from './styles'
import HalfTextOverlay from 'components/HalfTextOverlay'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import Banner from 'components/Banner'
import List from 'components/List'

// Assets
import streetImg from './assets/419BroomeStreetscape.jpg'
import ourPic1 from './assets/goodnightSmartphoneWindow.jpg'

// Content
const banner = {
  title: 'Thrive Global Pop-up Store',
  bannerText: '',
  height: 'quarterHeight',
  bannerImage: streetImg,
  bannerImageOverlay: 'overlayTrue'
}

const storeDescrip = {
  title: 'The Destination for Well-Being',
  hasButton: false,
  image: ourPic1,
  sectionText: [`Thrive Global offers a curated selection of the best technology
   and products - including our own, newly developed Thrive products - for
   well-being and performance. In collaboration with our scientific advisory
   board, we have vetted hundreds of the best health and well-being products,
   services and technologies to equip people with solutions to thrive at work
   and at home. The Thrive Global Pop Up Store, located in a 5,000 square-foot
   SoHo loft at 419 Broome Street, will offer live demonstrations, education,
   and trials of the latest products and technologies across the categories of
   mind, body, sleep, productivity, recharging, creativity, and giving.`]
}

const storeInfo = {
  sectionClass: 'default',
  postContentStyle: 'postContentRight',
  title: 'Open Through the Holidays',
  url: 'https://goo.gl/maps/fz1a25bh3872',
  sectionText: [
  (<div>
    <dl>
      <dt>Address</dt>
      <dd>419 Broome St. New York, NY 10012</dd>
      <dt>Date</dt>
      <dd>December 1 to January 15</dd>
      <dt>Hours</dt>
      <dd>10am to 7pm, daily</dd>
      <dt>Phone</dt>
      <dd>(646) 649-4223</dd>
      <dt>Email</dt>
      <dd>retail@thriveglobal.com</dd>
      <dt>Closed</dt>
      <dd>December 25 and January 1</dd>
    </dl>
  </div>)
  ],
  bgImage: streetImg
}

const ourBrands = {
  hasTitle: true,
  title: 'Thrive Global Commerce Partners',
  bulletList: true,
  items: [
    'Acorns',
    'Aloha',
    'Aros',
    'Audible',
    'Breathometer',
    'Coco-Mat',
    'Color Genomics Inc',
    'Consumer Physics',
    'Crowdrise',
    'Deepstream VR',
    'Dermalogica',
    'Doctors on Demand',
    'Doppler Labs',
    'Claritas Mind Science',
    'FiftyThree',
    'Fitbit',
    'The Goodnight Company',
    'Gunnar Optics',
    'Happiest Baby',
    'Headspace',
    'Heartmath',
    'Hello, Inc.',
    'Hill House Home',
    'House of Matcha',
    'Humanscale',
    'Hyperice',
    'Iluminage',
    'Isabella Huffington',
    'Juice Beauty',
    'Kikki-K',
    'Kurbo',
    'LAFCO',
    'Levitas',
    'La Roche Posay',
    'Lifespan Fitness',
    'Lighting Science',
    'Lumoid',
    'Moving Art',
    'Murad',
    'Muse',
    'Peloton',
    'Philips',
    'Pil-ookie',
    'Pour Les Femmes',
    'Quell Relief',
    'Rebecca Minkoff',
    'Restworks',
    'S\'well',
    'Sakara Life',
    'Seedlings',
    'Spire',
    'Technogym',
    'Thrive Market',
    'Trishla Jain',
    'Tribute.co',
    'Twist',
    'Ubiome',
    'Upright Tech',
    'Vida Health',
    'Vinaya',
    'Withings',
    'Zeel'
  ],
  itemWidth: 'third'
}

// Popup Page Layout
export const PopupStoreView = () => (
  <main role='main' className={styles.popupStore}>
    <Banner {...banner} />
    <HalfTextOverlay {...storeInfo} />
    <FullWidthTwoCol {...storeDescrip} />
    <List {...ourBrands} />
  </main>
)

export default PopupStoreView
