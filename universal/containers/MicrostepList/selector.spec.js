import selector from './selector'

import { KEY as microstepKey } from 'modules/Microsteps'
import { KEY as filterKey } from 'modules/MicrostepsFilter'

describe("filtered microstep list selector", () => {
  const list = [
    { id: 1, title: 'find me' },
    { id: 2, title: 'xxxx me' },
    { id: 3, title: 'yyyy me' },
    { id: 4, title: 'find me' }
  ]

  function checkForFindWithFilter(filter) {
    const selected = selector({ [microstepKey]: { list }, [filterKey]: { filter } })
    const expected = [{"id": 1, "title": "find me"}, {"id": 4, "title": "find me"}]

    expect(selected).toEqual(expected)
  }

  it("successfully matches titles with the word 'find'", () => {
    checkForFindWithFilter('find')
  })

  it("successfully matches titles with the word 'find' (case insensitive)", () => {
    checkForFindWithFilter('FIND')
  })
})
