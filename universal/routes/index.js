import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Give from 'layouts/Give'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import TempHomePage from 'layouts/TempHomePage'
import Learn from 'layouts/Learn'
import SignUp from 'layouts/SignUp'
import Apps from 'layouts/Apps'
import Thrive from 'layouts/Thrive'
import Pulse from 'layouts/Pulse'
import Interests from 'layouts/Interests'
import PulseScore from 'containers/PulseScore'
import GlassDoor from 'layouts/GlassDoor'
import { PWUOverview, PWUCorporate, PWUContent, PWUCommerce } from 'layouts/PartnerWithUs'  
import Welcome from 'components/Welcome'
import Profile from 'layouts/Profile'
import Login from 'layouts/Login'
import Pathway from 'layouts/Pathway'
import Journey from 'layouts/Journey'

export const createRoutes = (store) => ([
  {
    path: '/steps/:id',
    component: EmbeddedMicrostep
  },
  {
    path: '/coming-soon',
    component: TempHomePage
  },
  {
    path: '/home',
    component: LayoutCore,
    indexRoute: Home
  },
  {
    path: '/',
    component: LayoutCore,
    indexRoute: Home,
    childRoutes: [
      {
        path: 'partners',
        indexRoute: { component: PWUOverview },
        childRoutes: [
          {
            path: 'corporate',
            component: PWUCorporate
          },
          {
            path: 'content',
            component: PWUContent
          },
          {
            path: 'commerce',
            component: PWUCommerce
          }
        ]
      },      
      {
        path: 'microsteps',
        component: Microsteps
      },
      {
        path: 'pathways/:pathwayId/journeys/:journeyId',
        component: Journey
      },
      {
        path: 'pathways/:id',
        component: Pathway
      },
      {
        path: 'grow',
        component: Learn
      },
      {
        path: 'give',
        component: Give
      },
      {
        path: 'apps',
        component: Apps
      },
      {
        path: 'thrive',
        component: Thrive
      },
      {
        path: 'pulse',
        component: Pulse
      },
      {
        path: 'interests',
        component: Interests
      },
      {
        path: 'pulsescore',
        component: PulseScore
      },
      {
        path: 'corporate-pledge',
        component: GlassDoor
      },
      {
        path: 'signup',
        component: SignUp
      },
      {
        path: 'welcome',
        component: Welcome
      },
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: ':page_id',
        component: Content
      }
    ]
  }
])

export default createRoutes
