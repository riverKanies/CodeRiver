import selector from './selector'

import { KEY as microstepKey, initialState as msState } from 'modules/Microsteps'
import { KEY as filterKey, initialState as filterState } from 'modules/MicrostepsFilter'

describe("filter selector", () => {
  context("filtered microstep list selector", () => {
    const list = [
      { id: 1, title: 'find me' },
      { id: 2, title: 'xxxx me' },
      { id: 3, title: 'yyyy me' },
      { id: 4, title: 'find me' }
    ]

    function checkForFindWithFilter(filter) {
      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, filter }
      })

      const expected = [
        {"id": 1, "title": "find me"},
        {"id": 4, "title": "find me"}
      ]

      expect(selected.microsteps).toEqual(expected)
    }

    it("successfully matches titles with the word 'find'", () => {
      checkForFindWithFilter('find')
    })

    it("successfully matches titles with the word 'find' (case insensitive)", () => {
      checkForFindWithFilter('FIND')
    })
  })

  context("paginated results with no filter", () => {
    const filter = ''
    const list = [
      { id: 0, title: 'find me' },
      { id: 1, title: 'xxxx me' },
      { id: 2, title: 'yyyy me' },
      { id: 3, title: 'find me' },
      { id: 4, title: 'find me' },
      { id: 5, title: 'xxxx me' },
      { id: 6, title: 'yyyy me' },
      { id: 7, title: 'find me' },
      { id: 8, title: 'find me batman!' }
    ]

    it("return two results from the first page", () => {
      const currentPage = 0
      const perPage = 2

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      const expected = [
        { id: 0, title: 'find me' },
        { id: 1, title: 'xxxx me' },
      ]

      expect(selected.microsteps).toEqual(expected)

    })

    it("return four results from the first page", () => {
      const currentPage = 0
      const perPage = 4

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      const expected = [
        { id: 0, title: 'find me' },
        { id: 1, title: 'xxxx me' },
        { id: 2, title: 'yyyy me' },
        { id: 3, title: 'find me' },
      ]

      expect(selected.microsteps).toEqual(expected)

    })

    it("return four results from the first page", () => {
      const currentPage = 1
      const perPage = 4

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      const expected = [
        { id: 4, title: 'find me' },
        { id: 5, title: 'xxxx me' },
        { id: 6, title: 'yyyy me' },
        { id: 7, title: 'find me' }
      ]

      expect(selected.microsteps).toEqual(expected)
    })

    it("deals with odd numbering just fine", () => {
      const currentPage = 4
      const perPage = 2

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      const expected = [
        { id: 8, title: 'find me batman!' }
      ]

      expect(selected.microsteps).toEqual(expected)
    })

    it("returns the current page", () => {
      const currentPage = 4
      const perPage = 2

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      expect(selected.currentPage).toEqual(currentPage)
    })

    it("returns the correct number of total pages", () => {
      const currentPage = 4
      const perPage = 2

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      expect(selected.totalPages).toEqual(5)
    })
  })
})
