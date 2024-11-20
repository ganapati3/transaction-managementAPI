import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME,DB_PORT } = process.env;

export const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port:DB_PORT
});
