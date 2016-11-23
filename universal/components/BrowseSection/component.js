import React from 'react'
import styles from './styles'
import BrowseItem from 'components/BrowseItem'


const Fakeitems = 
[{
  title: "Browse Item 1",
  description: "description........",
  link: "#"
},
{
  title:"Browse item 2",
  description:"description........",
  link: "#"
}
];

const FakeDescription = "Here are our Partners"

export const BrowseSection = () => {
    return (
    <section className={styles.SectionContainer}>
        {Fakeitems.map(
          item =>
          <BrowseItem {...item} />
          )}
      </section>

  )
}

export default BrowseSection
