import React from 'react'
import styles from './styles'
import PartnerItem from 'components/PartnerItem'


const Fakeitems = 
[{
  title: "Partner Item 1",
  description: "description........"
},
{
  title:"Partner item 2",
  description:"description........"
},
{
  title: "Partner Item 3",
  description: "description........"
},
{
  title:"Partner item 4",
  description:"description........"
}];


const FakeDescription = "Here are our Partners"

export const PartnerSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <h2 styles={styles.title}>Our Partners</h2>
      <p>Partners</p>
      <section>
        {Fakeitems.map(
          item =>
          <PartnerItem {...item} />
          )}
      </section>
    </section> 

  )
}

export default PartnerSection
