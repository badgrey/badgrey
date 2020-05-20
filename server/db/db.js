const Sequelize = require('sequelize');
//const pkg = require('../../package.json')
require('../../secrets');

//const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

//creation of the database and connecting it to Amazon RDS

const db = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: 'badgreyinstance.cg2sibkvqrfx.us-east-2.rds.amazonaws.com',
    port: '5432',
    logging: console.log(),
    maxConcurrentQueries: 100,
    operatorsAliases: false,
    dialect: 'postgres',
    dialectOptions: {
      ssl: 'Amazon RDS'
    }
  }
);
db.addHook('beforeCount', function(options) {
  if (this._scope.include && this._scope.include.length > 0) {
    options.distinct = true;
    options.col =
      this._scope.col || options.col || `"${this.options.name.singular}".id`;
  }

  if (options.include && options.include.length > 0) {
    options.include = null;
  }
});
module.exports = db;
