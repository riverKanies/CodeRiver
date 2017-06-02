import React from 'react'
import { Link } from 'react-router'

import ProjectSection from 'components/ProjectSection'
import MainCTA from 'components/MainCTA'

import styles from './styles'
import contentStyles from 'styles/content.css'

import imagePlanMade from './assets/planmadequotes.png'
import imagePlanMadeMobile from './assets/planmademobile.png'
import imageMusicRehab from './assets/musicrehab.png'

class Portfolio extends React.Component {

  render() {
    return (
      <main id='home' role='main' className={contentStyles.container}>
        <h1 className={contentStyles.header}>Portfolio</h1>
        <h3 className={contentStyles.subheader}>I've worked on a bunch of cool stuff, check it out</h3>
        <ProjectSection
          header={'PlanMade Life Insurance'}
          link={'http://www.myplanmade.com/'}
          image={imagePlanMade}
          mobileImage={imagePlanMadeMobile}
          description={'Chris Thompson is a young aspiring entrepreneur working in the life insurance space. I was able to get him a fully functional MVP app to help him validate his business model and catch the attention of investors. This project involved an integration with a 3rd party service for quote data, automated emails to help get users engaged with the bussiness, and an interactive form for modifying quote data.'}
          tech={'This is a two piece app, the frontend and backend are completely decoupled. The frontend is a mobile-friendly react based static site. The backend is a Ruby on Rails API server.'}
        />
        <ProjectSection
          header={'Music Therapy Stroke Rehabilitation'}
          link={'http://musicrehabapp.herokuapp.com/'}
          image={imageMusicRehab}
          description={'Martha Summa has a vision of better rehabilitation tools...'}
          tech={'This is a two piece app, the frontend and backend are completely decoupled. The frontend is a mobile-friendly react based static site. The backend is a Ruby on Rails API server.'}
        />
        <div style={{textAlign: 'center'}}>
          <p className={contentStyles.body}>I've helped many entrepreneurs in realizing their dreams. You could be next.</p>
          <MainCTA />
        </div>
      </main>
    )
  }
}

export default Portfolio
