import React from 'react'
import styles from './styles'
import ScienceItem from 'components/ScienceItem'


const Fakeitems = 
[{
	title: "Science Item 1",
	description: "description........"
},
{
	title:"Science item 2",
	description:"description........"
}]
export const ScienceSection = () => {
    return (
    <div className={styles.SectionContainer}>
      <h2>Science Section</h2>
      <p>Some Science Stuff.......</p>
      <section>
        {Fakeitems.map(
          item =>
          <ScienceItem {...item} />
          )}
      </section>
    </div> 

  )
}

export default ScienceSection
