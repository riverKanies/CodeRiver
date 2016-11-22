import { createSelector } from 'reselect'

import { KEY as pathwaysKey } from 'modules/Pathways'
import { KEY as journeysKey } from 'modules/Journeys'

const pathwaysSelector = state => state[pathwaysKey]
const journeysSelector = state => state[journeysKey].list

export const getPathwayDetail = createSelector(
  [ pathwaysSelector, journeysSelector ],

  (pathwayStore, journeys) => {
    const { currentPathway, list } = pathwayStore
    const pathway = list.find(p => parseInt(p.id) === parseInt(currentPathway))

    return {
      pathway,
      journeys
    }
  }
)
