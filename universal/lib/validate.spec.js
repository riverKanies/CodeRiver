import { createValidator, required, email, minLength, maxLength, integer, oneOf, match } from 'lib/validate'

describe('validations', () => {
  context('email', () => {
    it('should recognize a valid email', () => {
      expect(email('someemail@domain.com')).toBe(undefined)
    })
    it('should recognize an invalid email', () => {
      expect(email('ladeeda')).toBe('Invalid email address')
    })
  })

  context('required', () => {
    it('should enforce a required value', () => {
      expect(required(null)).toBe('Required')
    })
    it('should allow a valid value', () => {
      expect(required('something')).toBe(undefined)
    })
  })

  context('minLength', () => {
    it('should enforce a minimum character length', () => {
      expect(minLength(3)('12')).toBe('Must be at least 3 characters')
    })
    it('should allow a valid string', () => {
      expect(minLength(3)('1234')).toBe(undefined)
    })
  })

  context('maxLength', () => {
    it('should enforce a maximum character length', () => {
      expect(maxLength(4)('12345')).toBe('Must be no more than 4 characters')
    })
    it('should allow a valid string', () => {
      expect(maxLength(4)('123')).toBe(undefined)
    })
  })

  context('integer', () => {
    it('should enforce an integer', () => {
      expect(integer('string')).toBe('Must be an integer')
    })
    it('should allow a valid integer', () => {
      expect(integer(3)).toBe(undefined)
    })
  })

  context('oneOf', () => {
    it('should not allow an element that is not valid', () => {
      expect(oneOf(['hi'])('wrong')).toBe('Must be one of: hi')
    })
    it('should allow a valid element', () => {
      expect(oneOf(['hi'])('hi')).toBe(undefined)
    })
  })

  context('match', () => {
    it('should not allow an element that does not match', () => {
      expect(match('key')('thing1', {'key': 'thing2'})).toBe('Do not match')
    })
    it('should allow a matching element', () => {
      expect(match('key')('matchingThing', {'key': 'matchingThing'})).toBe(undefined)
    })
  })
})
