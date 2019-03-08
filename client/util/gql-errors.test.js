const getGqlErrors = require('./gql-errors')

describe('gql-errors', () => {
  it('should format errors', () => {
    expect(
      getGqlErrors({
        errors: [{ message: 'email_check' }],
      })
    ).toMatchSnapshot()
  })

  it('should format nothing', () => {
    expect(getGqlErrors({})).toEqual({})
  })
})
