const User = require('./user')
const Artist = require('./artist')

User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})

module.exports = {
  User,
  Artist
}
