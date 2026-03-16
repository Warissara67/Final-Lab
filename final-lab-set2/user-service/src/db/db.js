const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

async function initDB(){

  try{

    await pool.query('SELECT 1')

    console.log('user-db connected')

  }catch(err){

    console.error('user-db connection error', err)

    throw err

  }

}

module.exports = {
  pool,
  initDB
}