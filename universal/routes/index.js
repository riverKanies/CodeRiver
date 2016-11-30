import Content from 'layouts/Content'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Give from 'layouts/Give'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import TempHomePage from 'layouts/TempHomePage'
import Grow from 'layouts/Grow'
import SignUp from 'layouts/SignUp'
import Apps from 'layouts/Apps'
import Pulse from 'layouts/Pulse'
import Interests from 'layouts/Interests'
import PopupStore from 'layouts/PopupStore'
import PulseScore from 'containers/PulseScore'
import GlassDoor from 'layouts/GlassDoor'
import { PWUOverview, PWUCorporate, PWUContent, PWUCommerce } from 'layouts/PartnerWithUs'
import Welcome from 'components/Welcome'
import Profile from 'layouts/Profile'
import Login from 'layouts/Login'
import RegistrationSuccess from 'layouts/RegistrationSuccess'
import Pathway from 'layouts/Pathway'
import About from 'layouts/About'
import Journey from 'layouts/Journey'

function handleUpdate (prevState, nextState) {
  if (nextState.location.action !== 'POP') {
    window.scrollTo(0, 0)
  }
}

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
    path: '/',
    component: LayoutCore,
    indexRoute: Home,
    onChange: handleUpdate,
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
        path: '/home',
        component: Home.component
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
        component: Grow
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
        path:'about',
        component: About
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
        path: 'popup',
        component: PopupStore
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
        path: 'registration-success',
        component: RegistrationSuccess
      },
      {
        path: ':page_id',
        component: Content
      }
    ]
  }
])

export default createRoutes
