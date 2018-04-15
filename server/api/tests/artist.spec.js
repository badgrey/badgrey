const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const Artist = db.model('artist')
const User = db.model('user')


describe('Artist routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/artists', () => {
    const rapperOne = {name: 'Russ', city: 'Atlanta', imageURL: 'https://pbs.twimg.com/media/DaRpkMyXcAAXNYW.jpg', genre: 'Conscious', stateAbbrev: 'GA'}
    const rapperTwo = {name: 'Lil Uzi Vert', city: 'Philladelphia', imageURL: 'https://sslb.ulximg.com/image/405x405/artist/1464961822_6e757496657e78e0a893e0c8a3753afd.jpg/8b9b3e01b6e633fbd3974385e88c2f50/1464961822_bfdbd37bf6376d367e672d59e2b22b11.jpg', genre: 'Cloud', stateAbbrev: 'PA'}
    const rapperThree = {name: 'Yung Lean', city: 'Stockholm', imageURL: 'https://hypb.imgix.net/image/2017/07/yung-lean-jonatan-leandoer127-katla.jpg?q=75&w=800&fit=clip&auto=compress%2Cformat', genre: 'Cloud', stateAbbrev: 'ROW'}

    const regUser = {email: 'marko@marko.com', password: '123', isAdmin: false}
    const adminUser = {email: 'cole@cole.com', password: '123', isAdmin: true}

    beforeEach(() => {
      return Artist.create(rapperOne)
        .then(Artist.create(rapperTwo))
        .then(Artist.create(rapperThree))
        .then(User.create(regUser))
        .then(User.create(adminUser))
    })

    it('GET /api/artists', () => {

      return request(app)
        .get('/api/artists')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.be.equal(3)
          expect(res.body[0].city).to.be.equal('Atlanta')
          expect(res.body[1].imageURL).to.be.equal(rapperTwo.imageURL)
          expect(res.body[2].stateFullName).to.be.equal('Rest of World')
        })
    })

    it('GET /api/artists/:id', () => {
      return request(app)
        .get(`/api/artists/${3}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.id).to.be.equal(3)
          expect(res.body.stateAbbrev).to.be.equal('ROW')
          expect(res.body.name).to.be.equal(rapperThree.name)
        })
    })

    it('POST /api/artists/admin', () => {
      return request(app)
        .post(`/api/artists/admin`)
        .send({name: 'Lil Pump', city: 'Miami', imageURL: 'https://ssli.ulximg.com/image/740x493/gallery/1513283552_e978feac3b60891bd73cc67e27e4c6e9.jpg/f7d2c6f123e1ee96922aa7ddc091e781/1513283552_eb9d5f6c6f1f6548380ad8aed82cf2c8.jpg', genre: 'Cloud', stateAbbrev: 'FL'})
        .expect(401)
    })
  }) // end describe('/api/artists')
}) // end describe('Artist routes')
