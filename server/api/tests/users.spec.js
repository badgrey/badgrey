// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../../db')
// const app = require('../../index')
// const User = db.model('user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     beforeEach(() => {
//       return User.create({
//         email: 'cody@puppybook.com',
//         username: 'codyboy',
//         password: '123'
//       })
//     })

//     it('GET /api/users', () => {
//       return request(app)
//         .get('/api/users')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body[0].email).to.be.equal('cody@puppybook.com')
//         })
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')
