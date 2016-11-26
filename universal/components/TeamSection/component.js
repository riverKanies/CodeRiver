/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'
import FounderBio from 'components/FounderBio'
import fetch from 'isomorphic-fetch'
import Modal from 'components/Modal'

type Props = {
  title: string,
}


function getTeamMembers() {
  return fetch('/Team/team.json')
}


export class TeamSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [],
      showModal: false,
      modalContent: <div></div>
    }
  }

  componentWillMount() {
    getTeamMembers().then(response => {
      let team = response.json()
      team.then(json => {
        this.setState({
          teamMembers: json
        })
      })
    })
  }

  handleClick(member) {
    this.setState({
      showModal: !this.state.showModal,
      modalContent: (
        <div>
          <h3> {member.name} </h3>
          <h4> {member.title} </h4>
          <p> {member.bio} </p>
        </div>
      )
    })
  }

  render() {
    return (
      <section className={styles.SectionContainer}>
        <section className={styles.row} >
          <h2 className={styles.title}> Our Team </h2>
          <Modal show={this.state.showModal} onClick={this.handleClick.bind(this)} content={this.state.modalContent} />
          <FounderBio />
          <section className={styles.biosRow}>
            {this.state.teamMembers.map(member =>
              <TeamBio {...member} onClick={()=>this.handleClick.call(this, member)} key={member.name} />
            )}
          </section>
        </section>
      </section>
    )
  }
}

export default TeamSection
