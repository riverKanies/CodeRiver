/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'
import FounderBio from 'components/FounderBio'
import fetch from 'isomorphic-fetch'

type Props = {
  title: string,
}


function getTeamMembers(){
  return fetch('/Team/team.json')
}


export class TeamSection extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      teamMembers: []
    }
  }

  componentWillMount(){
    getTeamMembers().then( response => {
      let team = response.json()
      team.then( json => {
        this.setState({
          teamMembers: json
        })  
      })
    })
  }

  render () {
    return (
      <section className={styles.SectionContainer}>
        <section className={styles.row} >
          <h2 className={styles.title}> Our Team </h2>
          <FounderBio />
          <section className={styles.biosRow}>
            {this.state.teamMembers.map( member =>
              <TeamBio {...member} />
            )}
          </section>
        </section>
      </section>
    )
  }
}

export default TeamSection
