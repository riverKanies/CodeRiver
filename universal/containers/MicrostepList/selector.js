import { createSelector } from 'reselect'
import { KEY as microstepKey } from 'modules/Microsteps'
import { KEY as filterKey } from 'modules/MicrostepsFilter'

const microstepsSelector = state => state[microstepKey].list
const filterSelector = state => state[filterKey]

export default createSelector(
  [ microstepsSelector, filterSelector ],
  (microsteps, filterStore) => {
    const { filter, currentPage, perPage } = filterStore

    const re = new RegExp(filter, 'i')

    const begin = currentPage * perPage
    const end = begin + perPage

    const filtered = microsteps.filter(m => m.title.match(re))
    const totalPages = Math.ceil(filtered.length / perPage)

    return {
      microsteps: filtered.slice(begin, end),
      totalPages,
      currentPage
    }
  }
)
