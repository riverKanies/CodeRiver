import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'
import PathwayCard from 'components/PathwayCard'

const Fakeitems = 
[{
  title: "Offer Item 1",
  description: "description........"
},
{
  title:"Offer item 2",
  description:"description........"
},
{
  title: "Offer Item 3",
  description: "description........"
},
]
export const OfferSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <h2 className={styles.title}>What We Offer</h2>
      <section className={styles.content}>
        {Fakeitems.map(
          item =>
          <PathwayCard {...item} />
          )}
      </section>
    </section> 

  )
}

export default OfferSection
