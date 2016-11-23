/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'
import FounderBio from 'components/FounderBio'
import fetch from 'isomorphic-fetch'

type Props = {
  title: string,
}


function getMembers(){
    console.log("hello")
    let member =[]
    fetch('/Team/team.json')
    .then(function(response) {
      let team = response.json()
      team.then(function(json){
          return json 
          console.log(json)    
      })
  })

}


let members = [
  {
  title:"Founder & CEO",
  name:"Arianna Huffington",
  },
  {
  title:"CTO",
  name:"Rajiv"
  },
  {
  title:" Job title",
  name:"Person",
  },
  {
  title:" Job title",
  name:"Person",
  },
  {
  title:" Job title",
  name:"Person",
  },
  {
  title:" Job Title",
  name:"Person",
  }]; 

const TeamSection2 = ({ title = 'Team' }: Props) => {
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

export class TeamSection extends React.Component {
  getInitialState(){
    return({
      memberArray: members
    })
  }
  componentWillMount(){
    getMembers()
    this.setState({
      memberArray: members
    })
  }


  render () {
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
}




export default TeamSection
