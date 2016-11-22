import React from 'react'
import styles from './styles'
import OfferItem from 'components/OfferItem'


const Fakeitems = 
[{
  title: "Offer Item 1",
  description: "description........"
},
{
  title:"Offer item 2",
  description:"description........"
}]
export const OfferSection = () => {
    return (
    <div className={styles.SectionContainer}>
      <h2>What We Offer</h2>
      <p>Product/Services We Offer</p>
      <section>
        {Fakeitems.map(
          item =>
          <OfferItem {...item} />
          )}
      </section>
    </div> 

  )
}

export default OfferSection
