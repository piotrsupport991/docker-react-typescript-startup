const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "db",
    database: "practice",
    password: "password",
    port: 5432,
  });
  
  export default pool;