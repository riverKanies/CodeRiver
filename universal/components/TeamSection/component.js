/* @flow */
import React from 'react'
import styles from './styles'
import TeamBio from 'components/TeamBio'
import FounderBio from 'components/FounderBio'
import fetch from 'isomorphic-fetch'
import Modal from 'components/Modal'

type Props = {
  title: string
}

type memberProps = {
  image: any,
  name: string,
  title: string,
  bio: string
}

function getTeamMembers () {
  return fetch('/Team/team.json')
}

export class TeamSection extends React.Component {
  props: Props
  state: any
  toggleModal: Function

  constructor (props: any) {
    super(props)
    this.state = {
      teamMembers: [],
      showModal: false,
      modalContent: <div />
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentWillMount () {
    getTeamMembers().then(response => {
      let team = response.json()
      team.then(json => {
        this.setState({
          teamMembers: json
        })
      })
    })
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleClick (element: Object, member: memberProps) {
    element.setState({
      showModal: !this.state.showModal,
      modalContent: (
        <div className={styles.bioModal}>
          <div className={styles.modalImageWrapper}>
            <div className={styles.modalImage} style={{backgroundImage: `url(${member.image})`}} />
          </div>
          <div className={styles.modalText}>
            <h3> {member.name} </h3>
            <h4> {member.title} </h4>
            <div dangerouslySetInnerHTML={{__html: member.bio}} />
          </div>
        </div>
      )
    })
  }

  render () {
    const founder = this.state.teamMembers[0]
    const team = this.state.teamMembers.slice(1)

    return (
      <section className={styles.sectionContainer}>
        <section className={styles.row}>
          <Modal show={this.state.showModal} onClick={this.toggleModal}
            content={this.state.modalContent} />
          <section className={styles.biosRow}>
            <h2 className={styles.title} id='team'> Our Team </h2>
            <FounderBio {...founder} onClick={() => this.handleClick(this, founder)} />
            <section className={styles.teamBios}>
              {team.map(member =>
                <TeamBio {...member} onClick={() => this.handleClick(this, member)} key={member.name} />
              )}
            </section>
          </section>
        </section>
      </section>
    )
  }
}

export default TeamSection
