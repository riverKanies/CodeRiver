import React from 'react'

import ProjectSection from 'components/ProjectSection'

import styles from './styles'
import contentStyles from 'styles/content.css'

import imagePlanMade from './assets/planmadequotes.png'

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
          description={'Chris Thompson is a young aspiring entrepreneur working in the life insurance space. I was able to get him a fully functional MVP app to help him validate his business model and catch the attention of investors. This project involved an integration with a 3rd party service for quote data, automated emails to help get users engaged with the bussiness, and an interactive form for modifying quote data.'}
          tech={'This is a two piece app, the frontend and backend are completely decoupled. The frontend is a react based static site. The backend is a Ruby on Rails API server.'}
        />
      </main>
    )
  }
}

export default Portfolio
