import { createSelector } from 'reselect'
import { KEY as microstepKey } from 'modules/Microsteps'
import { KEY as filterKey } from 'modules/MicrostepsFilter'

const microstepsSelector = state => state[microstepKey].list
const filterSelector = state => state[filterKey].filter

export default createSelector(
  [ microstepsSelector, filterSelector ],
  (microsteps, filter) => {
    const re = new RegExp(filter, 'i')
    return microsteps.filter(m => m.title.match(re))
  }
)
