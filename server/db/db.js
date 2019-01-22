const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

//creation of the database and connecting it to Amazon RDS

const db = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: 'badgreyinstance.cg2sibkvqrfx.us-east-2.rds.amazonaws.com',
  port: '5432',
  logging: console.log(),
  maxConcurrentQueries: 100,
  dialect: 'postgres',
  dialectOptions: {
    ssl: 'Amazon RDS'
  }
}
)
module.exports = db
