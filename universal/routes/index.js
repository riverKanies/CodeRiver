import Content from 'layouts/Content'
import PressReleases from 'layouts/Content/PressReleases'
import EmbeddedMicrostep from 'layouts/EmbeddedMicrostep'
import Microsteps from 'layouts/Microsteps'
import Give from 'layouts/Give'
import Home from 'layouts/Home'
import LayoutCore from 'layouts/LayoutCore'
import Grow from 'layouts/Grow'
import SignUp from 'layouts/SignUp'
import Team from 'layouts/Team'
import Apps from 'layouts/Apps'
import Press from 'layouts/Press'
import Pulse from 'layouts/Pulse'
import Interests from 'layouts/Interests'
import PopupStore from 'layouts/PopupStore'
import PulseScore from 'containers/PulseScore'
import GlassDoor from 'layouts/GlassDoor'
import PWUOverview from 'layouts/PartnerWithUs/Overview'
import PWUCorporate from 'layouts/PartnerWithUs/Corporate'
import PWUContent from 'layouts/PartnerWithUs/Content'
import PWUCommerce from 'layouts/PartnerWithUs/Commerce'
import CognitoForm from 'layouts/Cognito'
import Welcome from 'components/Welcome'
import Profile from 'layouts/Profile'
import Login from 'layouts/Login'
import RegistrationSuccess from 'layouts/RegistrationSuccess'
import Pathway from 'layouts/Pathway'
import About from 'layouts/About'
import Journey from 'layouts/Journey'
import NotFound from 'layouts/NotFound'

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
    path: '/',
    component: LayoutCore,
    indexRoute: Home,
    onChange: handleUpdate,
    childRoutes: [
      {
        path: 'partners**',
        onEnter: (_, replace) => replace('/about' + _.params.splat)
      },
      {
        path: 'about',
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
        path: 'press',
        component: Press
      },
      {
        path: 'apps',
        component: Apps
      },
      {
        path: 'who-we-are',
        component: About
      },
      {
        path: 'team',
        component: Team
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
        path: 'product-information-request',
        component: CognitoForm
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
        path: 'thrive/:page_id',
        component: Content
      },
      {
        path: 'press-releases',
        component: PressReleases
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
])

export default createRoutes
