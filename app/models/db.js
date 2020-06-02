const {Pool } = require('pg');

const dbConfig = require("../config/db.config");

const pool = new Pool({
	user: dbConfig.USER,
	host: dbConfig.HOST,
	database: dbConfig.DB,
	password: dbConfig.PASSWORD,
	port: dbConfig.PORT,
  })



module.exports = pool;