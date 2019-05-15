require('../../../secrets')
module.exports = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": "badgreyinstance.cg2sibkvqrfx.us-east-2.rds.amazonaws.com",
    "dialect": "postgres"
  }
}
