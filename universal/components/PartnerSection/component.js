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
}];

export const PartnerSection = () => {
    return (
    <div className={styles.SectionContainer}>
      <h2>Our Partners</h2>
      <p>Partners</p>
      <section>
        {Fakeitems.map(
          item =>
          <PartnerItem {...item} />
          )}
      </section>
    </div> 

  )
}

export default PartnerSection
