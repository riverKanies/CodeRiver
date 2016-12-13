import { routesParser } from 'react-router-sitemap'

import createRoutes from 'routes'
import createStore from 'store/createStore'
import sitemapPaths from './index'

const store = createStore({})
const router = createRoutes(store)

describe('comparing static sitemap file to routes from router', () => {
  const routesWeWant = routesParser(router).filter(r => {
    // drop the special routes for now
    if (r.match("\\*") || r.match(":")) {
      return false
    }
    return true
  })

  it('sitemap contains all the routes we want in the map', () => {
    expect(Array.isArray(routesWeWant)).toEqual(true)
    routesWeWant.forEach(r => {
      expect(sitemapPaths).toContain(r)
    })
  })
})
