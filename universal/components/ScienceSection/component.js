import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'


const Fakeitems = 
[{
  title: "Section Item 1",
  description: "description........"
},
{
  title:"Section item 2",
  description:"description........"
},
{
  title: "Section Item 3",
  description: "description........"
}]
export const SectionSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <h2 className={styles.title}>Science Behind Thrive</h2>
      <section className={styles.content}>
        {Fakeitems.map(
          item =>
          <IconWithText {...item} />
          )}
      </section>
    </section> 

  )
}

export default SectionSection
