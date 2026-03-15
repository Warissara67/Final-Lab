const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'taskboard',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'secret123',
});

async function initDB() {
  const sql = fs.readFileSync(
    path.join(__dirname, 'init.sql'),
    'utf8'
  );

  await pool.query(sql);
  console.log('[auth-db] initialized');
}

module.exports = { pool, initDB };