const User = require('./user')
const Artist = require('./artist')

User.belongsToMany(Artist, {through: 'savedArtists'})
Artist.belongsToMany(User, {through: 'savedArtists'})

module.exports = {
  User,
  Artist
}
