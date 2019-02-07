const Sequelize = require('sequelize')
const db = require('../db')

//has image url that will match image file name

const Artist = db.define('artist', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  city: {
    type: Sequelize.STRING,
  },
  imageURL: {
   type: Sequelize.STRING,
   allowNull: false,
   unique: true
  },
  soundcloudURL: {
    type: Sequelize.STRING
  },
  youtubeID: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stateAbbrev: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fileKey: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
}, {
 getterMethods: {
  stateFullName() {
    const states = {
      AL: 'Alabama',
      AK: 'Alaska',
      AZ: 'Arizona',
      AR: 'Arkansas',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DMV: 'Delaware || Maryland || Virginia',
      FL: 'Florida',
      GA: 'Georgia',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PA: 'Pennsylvania',
      RI: 'Rhode Island',
      International: 'International',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      WA: 'Washington',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming'
    }
    return states[this.stateAbbrev]
  }
 }
})

module.exports = Artist
