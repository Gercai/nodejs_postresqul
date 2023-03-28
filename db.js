const {Pool} = require("pg");
const pg = require('pg');

require("dotenv").config();

const {PGUSER,PGHOST,PGDATABASE,PGPASSWORD,PGPORT,PGCONNECTIONSTRING} = process.env

// console.log(PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT)

const pool = new Pool({
      user: PGUSER,
      host: PGHOST,
      database: PGDATABASE,
      password: PGPASSWORD,
      port: PGPORT
    // // PGCONNECTIONSTRING
    // postgres:"sjtstzgp:DHoUZIc9c6pbQKyk9TPEc7y5hmh6RK07@snuffleupagus.db.elephantsql.com/sjtstzgp"
})

module.exports = pool;