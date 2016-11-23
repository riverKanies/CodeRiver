/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'
import FounderBio from 'components/FounderBio'
import fetch from 'isomorphic-fetch'


type Props = {
  title: string,
}



fetch('/team.json')
.then(function(response) {
  let team = response.json()
  team.then(function(json){
      let membersArray = json
  })
})


const members = [
  {
  title:"Founder & CEO",
  name:"Arianna Huffington",
  },
  {
  title:"CTO",
  name:"Rajiv"
  },
  {
  title:" Job Title",
  name:"Person",
  },
  {
  title:" Job Title",
  name:"Person",
  },
  {
  title:" Job Title",
  name:"Person",
  },
  {
  title:" Job Title",
  name:"Person",
  }]; 

const TeamSection = ({ title = 'Team' }: Props) => {
  return (
    <section className={styles.SectionContainer}>

      <section className={styles.row} >
        <h2 className={styles.title}> Our Team </h2>
        <FounderBio />
        <section className={styles.biosRow}>
          {members.map(
          member =>
          <TeamBio {...member} />
          )}
        </section>
      </section>
    </section>
  )
}



export default TeamSection
