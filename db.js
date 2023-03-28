const {Pool} = require("pg")

const {PGCONNECTIONSTRING} = process.env;

const pool = new Pool({
    PGCONNECTIONSTRING
})

module.exports = pool;