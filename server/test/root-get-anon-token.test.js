const { assert, object, string } = require('joi')
const request = require('supertest')
const { app } = require('../index')
const {
  GQL: { rootGetAnonToken },
} = require('./_util')

describe('root-get-anon-token', () => {
  it('should get an anonymous token', () =>
    request(app)
      .post('/graphql')
      .send({
        query: rootGetAnonToken,
        variables: {},
      })
      .expect(({ body }) =>
        assert(
          body,
          object({
            data: object({
              getAnonymousToken: object({
                jwtToken: string().required(),
              }),
            }),
          })
        )
      ))
})