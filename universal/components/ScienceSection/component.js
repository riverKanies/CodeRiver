import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'


const Fakeitems = 
[{
  title: "Section Item 1",
  description: "Meditation has been shown to reduce stress, depression and anxiety, and has been associated with a reduction in mortality due to cardiovascular problems and cancer."
},
{
  title:"Section item 2",
  description:"Increasing happiness in the workplace reduces employee turnover and sick days, and increases productivity."
},
{
  title: "Section Item 3",
  description: "Volunteering has been connected with lower rates of depression, and a significant reduction in mortality risk. Volunteering at least once a week was found to have the same effect on subjective well-being as a doubling of household income."
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
