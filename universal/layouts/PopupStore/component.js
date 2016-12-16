// Components
import React from 'react'
import styles from './styles'
import HalfTextOverlay from 'components/HalfTextOverlay'
import FullWidthTwoCol from 'components/FullWidthTwoCol'
import Banner from 'components/Banner'
import FullWidthText from 'components/FullWidthText'

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
  postLabel: {},
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
  title: 'Thrive Global Commerce Partners',
  sectionText: [
    (<ul>
      <li>Acorns</li>
      <li>Aloha</li>
      <li>Aros</li>
      <li>Audible</li>
      <li>Breathometer</li>
      <li>Coco-Mat</li>
      <li>Color Genomics Inc</li>
      <li>Consumer Physics</li>
      <li>Crowdrise</li>
      <li>Deepstream VR</li>
      <li>Dermalogica</li>
      <li>Doctors on Demand</li>
      <li>Doppler Labs</li>
      <li>Claritas Mind Science</li>
      <li>FiftyThree</li>
      <li>Fitbit</li>
      <li>The Goodnight Company</li>
      <li>Gunnar Optics</li>
      <li>Happiest Baby</li>
      <li>Headspace</li>
      <li>Heartmath</li>
      <li>Hello, Inc.</li>
      <li>Hill House Home</li>
      <li>House of Matcha</li>
      <li>Humanscale</li>
      <li>Hyperice</li>
      <li>Iluminage</li>
      <li>Isabella Huffington</li>
      <li>Juice Beauty</li>
      <li>Kikki-K</li>
      <li>Kurbo</li>
      <li>LAFCO</li>
      <li>Levitas</li>
      <li>La Roche Posay</li>
      <li>Lifespan Fitness</li>
      <li>Lighting Science</li>
      <li>Lumoid</li>
      <li>Moving Art</li>
      <li>Murad</li>
      <li>Muse</li>
      <li>Peloton</li>
      <li>Philips</li>
      <li>Pil-ookie</li>
      <li>Pour Les Femmes</li>
      <li>Quell Relief</li>
      <li>Rebecca Minkoff</li>
      <li>Restworks</li>
      <li>S'well</li>
      <li>Sakara Life</li>
      <li>Seedlings</li>
      <li>Spire</li>
      <li>Technogym</li>
      <li>Thrive Market</li>
      <li>Trishla Jain</li>
      <li>Tribute.co</li>
      <li>Twist</li>
      <li>Ubiome</li>
      <li>Upright Tech</li>
      <li>Vida Health</li>
      <li>Vinaya</li>
      <li>Withings</li>
      <li>Zeel</li>
    </ul>)
  ]
}

// Popup Page Layout
export const PopupStoreView = () => (
  <main role='main' className={styles.popupStore}>
    <Banner {...banner} />
    <HalfTextOverlay {...storeInfo} />
    <FullWidthTwoCol {...storeDescrip} />
    <FullWidthText {...ourBrands} />
  </main>
)

export default PopupStoreView
