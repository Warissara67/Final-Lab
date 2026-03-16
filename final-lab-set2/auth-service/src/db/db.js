const { Pool } = require('pg');

const pool = new Pool({
  host:     process.env.DB_HOST     || 'auth-db',
  port:     parseInt(process.env.DB_PORT, 10) || 5432,
  database: process.env.DB_NAME     || 'authdb',
  user:     process.env.DB_USER     || 'admin',
  password: process.env.DB_PASSWORD || 'secret',
});

module.exports = { pool };