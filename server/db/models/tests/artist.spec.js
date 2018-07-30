/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../../index')
const Artist = db.model('artist')

describe('Artist model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctStateName', () => {
      let lilSlendy

      beforeEach(() => {
        return Artist.create({
          name: 'Lil Slender Boy',
          city: 'Long Island',
          imageURL: 'whatever',
          genre: 'Cloud',
          stateAbbrev: 'NY'
        })
          .then(artist => {
            lilSlendy = artist
          })
      })

      it('returns state full name', () => {
        expect(lilSlendy.stateFullName).to.be.equal('New York')
      })
    })
  })
})
