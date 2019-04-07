const { Pool } = require('pg')

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: true,
          user: "osys1000",
          host: "localhost",
          password: "student",
          database: "postgres"

})

module.exports = {
  pool,
}