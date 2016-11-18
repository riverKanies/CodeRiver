import selector from './selector'

import { KEY as microstepKey, initialState as msState } from 'modules/Microsteps'
import { KEY as filterKey, initialState as filterState } from 'modules/MicrostepsFilter'

describe("filter selector", () => {
  context("filtered microstep list selector", () => {
    const list = [
      { id: 1, search_field: 'find me' },
      { id: 2, search_field: 'xxxx me' },
      { id: 3, search_field: 'yyyy me' },
      { id: 4, search_field: 'find me' },
      { id: 5, search_field: null }
    ]

    function checkForFindWithFilter(filter) {
      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, filter }
      })

      const expected = [
        {"id": 1, "search_field": "find me"},
        {"id": 4, "search_field": "find me"}
      ]

      expect(selected.microsteps).toEqual(expected)
    }

    it("successfully matches search_fields with the word 'find'", () => {
      checkForFindWithFilter('find')
    })

    it("successfully matches search_fields with the word 'find' (case insensitive)", () => {
      checkForFindWithFilter('FIND')
    })
  })

  context("paginated results with no filter", () => {
    const filter = ''
    const list = [
      { id: 0, search_field: null },
      { id: 1, search_field: 'find me' },
      { id: 2, search_field: 'xxxx me' },
      { id: 3, search_field: 'yyyy me' },
      { id: 4, search_field: 'find me' },
      { id: 5, search_field: 'find me' },
      { id: 6, search_field: 'xxxx me' },
      { id: 7, search_field: 'yyyy me' },
      { id: 8, search_field: 'find me' },
      { id: 9, search_field: 'find me batman!' }
    ]

    it("return two results from the first page", () => {
      const currentPage = 0
      const perPage = 2

      const selected = selector({
        [microstepKey]: { list },
        [filterKey]: { ...filterState, currentPage, perPage }
      })

      const expected = [
        { id: 1, search_field: 'find me' },
        { id: 2, search_field: 'xxxx me' },
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
        { id: 1, search_field: 'find me' },
        { id: 2, search_field: 'xxxx me' },
        { id: 3, search_field: 'yyyy me' },
        { id: 4, search_field: 'find me' },
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
        { id: 5, search_field: 'find me' },
        { id: 6, search_field: 'xxxx me' },
        { id: 7, search_field: 'yyyy me' },
        { id: 8, search_field: 'find me' }
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
        { id: 9, search_field: 'find me batman!' }
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
