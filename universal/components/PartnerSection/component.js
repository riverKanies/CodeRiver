import React from 'react'
import styles from './styles'
import PartnerDetail from 'components/PartnerDetail'


const Fakeitems = 
[{
  name: "Partner Item 1",
  detail: "detail........"
},
{
  name:"Partner item 2",
  detail:"detail........"
}];


const FakeDescription = "Here are our Partners"

export const PartnerSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <h1 className={styles.title}>Our Partners</h1>
      <section className={styles.content}>
        {Fakeitems.map(
          item =>
          <PartnerDetail {...item} />
          )}
      </section>
    </section> 

  )
}

export default PartnerSection
