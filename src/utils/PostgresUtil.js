const { Pool } = require('pg')

const pool = new Pool({
  //connectionString: process.env.DATABASE_URL,
  //ssl: true
          password: "student",
          database: "postgres"

})

module.exports = {
  pool,
}