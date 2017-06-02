import React from 'react'
import { Link } from 'react-router'

import ProjectSection from 'components/ProjectSection'
import MainCTA from 'components/MainCTA'

import styles from './styles'
import contentStyles from 'styles/content.css'

import imagePlanMade from './assets/planmadequotes.png'
import imagePlanMadeMobile from './assets/planmademobile.png'
import imageMusicRehab from './assets/musicrehabdesktop.png'
import imageMusicRehabMobile from './assets/musicrehabmobile.png'
import imageTemper from './assets/temper.png'
import imageTemperMobile from './assets/tempermobile.png'

class Portfolio extends React.Component {
  render() {
    return (
      <main id='home' role='main' className={contentStyles.container}>
        <h1 className={contentStyles.header}>Portfolio</h1>
        <h3 className={contentStyles.subheader}>I've worked on a bunch of cool stuff, check it out</h3>
        <ProjectSection
          header={'PlanMade: Life Insurance'}
          link={'http://www.myplanmade.com/'}
          image={imagePlanMade}
          mobileImage={imagePlanMadeMobile}
          description={'Chris Thompson is a young aspiring entrepreneur working in the life insurance space. I was able to get him a fully functional MVP app to help him validate his business model and catch the attention of investors. This project involved an integration with a 3rd party service for quote data, automated emails to help get users engaged with the bussiness, and an interactive form for modifying quote data.'}
          tech={'This is a two piece app, the frontend and backend are completely decoupled. The frontend is a mobile-friendly react based static site. The backend is a Ruby on Rails API server with a PostgreSQL database.'}
        />
        <ProjectSection
          header={'Music Therapy: Stroke Rehabilitation'}
          link={'http://musicrehabapp.herokuapp.com/'}
          image={imageMusicRehab}
          mobileImage={imageMusicRehabMobile}
          description={"Martha Summa has designed a tool that utilizes music to help with attention focus. It can be applicable to helping with stroke, autism, Parkinson’s, Traumatic Brain Injury (TBI), and many other conditions. The app utilizes graphic and audio resources stored on AWS S3 to test and improve patients' attention span. The app also includes reporting and administrative interfaces for managing patients and assessing their progress."}
          tech={'This is a two piece app, the frontend and backend are completely decoupled. The frontend is a mobile-friendly react based static site. The backend is a Ruby on Rails API server with a PostgreSQL database.'}
        />
        <ProjectSection
          header={'Temper: User Perception Tracking'}
          link={'https://www.temper.io/'}
          image={imageTemper}
          mobileImage={imageTemperMobile}
          description={"SimpleFocus, a local Chattanooga consultancy, brought me on to build some features for their Temper app. Temper measures how customers feel about a business so that the bussiness knows what to improve. I built two full-stack features on the app that involved integrations with 3rd party services and interfaces for managing those integrations. The first feature was exporting response data to both CSV and XLS files to AWS S3 buckets and automated emails to send the links to download those files. The second was an integration with Zapier to allow customers to have their data sent out, in real time, to any of the services integrated with Zapier."}
          tech={'Ruby on Rails app backed by a PostgreSQL database.'}
        />
        <div style={{textAlign: 'center'}}>
          <p className={contentStyles.oneliner}>I've helped many entrepreneurs in realizing their dreams. You could be next.</p>
          <MainCTA />
        </div>
      </main>
    )
  }
}

export default Portfolio
