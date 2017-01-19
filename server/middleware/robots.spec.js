import middleware from './robots'

context('robots middleware', () => {
  describe('default use case', () => {
    it('calls next with www.thriveglobal.com and url /', () => {
      const req = {
        hostname: 'www.thriveglobal.com',
        url: '/'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(next).toHaveBeenCalled()
    })

    it('calls next with www.thriveglobal.com and url /robots.txt', () => {
      const req = {
        hostname: 'www.thriveglobal.com',
        url: '/robots.txt'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(next).toHaveBeenCalled()
    })
  })
  context('with accenture subdomain', () => {
    it('calls next for standard routes', () => {
      const req = {
        hostname: 'accenture.thriveglobal.com',
        url: '/'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(next).toHaveBeenCalled()
    })

    it('calls next another route', () => {
      const req = {
        hostname: 'accenture.thriveglobal.com',
        url: '/login'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(next).toHaveBeenCalled()
    })

    it('calls end when getting accenture robots', () => {
      const req = {
        hostname: 'accenture.thriveglobal.com',
        url: '/robots.txt'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(res.end).toHaveBeenCalled()
    })

    it('calls end when getting accenture robots for subdomains containing accenture', () => {
      const req = {
        hostname: 'thrive-marketing-accenture.herokuapp.com',
        url: '/robots.txt'
      }
      const res = {
        end: jest.fn()
      }
      const next = jest.fn()

      middleware(req, res, next)

      expect(res.end).toHaveBeenCalled()
    })
  })
})
