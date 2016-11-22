/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'

type Props = {
  title: string,
}


const members = [{
  title:"Founder & CEO",
  name:"Arianna Huffington",
  wide:true
  },
  {
  title:"CTO",
  name:"Rajiv"
  }]; 

const TeamSection = ({ title = 'Team' }: Props) => {
  return (
    <section className={styles.SectionContainer, styles.container}>

      <section className={styles.row} >
        <h2> Our Team </h2>
        {members.map(
          member =>
          <TeamBio {...member} />
          )}
      </section>
    </section>
  )
}



export default TeamSection
