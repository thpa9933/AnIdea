const Pool = require("pg").Pool;

const pool = new Pool({
    user: "thomas_payne",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "anidea"
});

module.exports = pool;