var getSubdomain = require('./index').getSubdomain

context('thrive-utilties', () => {
  describe('with the default', () => {
    it('returns www for localhost', () => {
      const hostname  = 'localhost'
      expect(getSubdomain(hostname)).toEqual('www')
    })

    it('returns www for thriveglobal.com', () => {
      const hostname = 'thriveglobal.com'
      expect(getSubdomain(hostname)).toEqual('www')
    })

    it('returns admin for admin.thriveglobal.com', () => {
      const hostname = 'admin.thriveglobal.com'
      expect(getSubdomain(hostname)).toEqual('admin')
    })

    it('returns accenture for accenture.thriveglobal.com', () => {
      const hostname = 'accenture.thriveglobal.com'
      expect(getSubdomain(hostname)).toEqual('accenture')
    })
  })

  describe('with base specified', () => {
    it('returns base for localhost', () => {
      const hostname  = 'localhost'
      expect(getSubdomain(hostname, 'xxx')).toEqual('xxx')
    })

    it('returns base for thriveglobal.com', () => {
      const hostname = 'thriveglobal.com'
      expect(getSubdomain(hostname, 'xxx')).toEqual('xxx')
    })

  })
})
