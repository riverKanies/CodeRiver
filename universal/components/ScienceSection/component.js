import React from 'react'
import styles from './styles'
import IconWithText from 'components/IconWithText'

const Fakeitems = 
[{
	title: "Science Item 1",
	description: "description........"
},
{
	title:"Science item 2",
	description:"description........"
},
{
  title: "Science Item 3",
  description: "description........"
},
{
  title:"Science item 4",
  description:"description........"
},]
export const ScienceSection = () => {
    return (
    <section className={styles.SectionContainer}>
      <h2>Science Section</h2>
      <p>Some Science Stuff.......</p>
    </section> 

  )
}

export default ScienceSection
