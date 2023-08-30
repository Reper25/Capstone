const { createPool } = require('mysql')
require('dotenv').config()
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30
})
module.exports = connection