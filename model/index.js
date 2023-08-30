const users = require('./users')
const products = require('./products')

module.exports = {
    users: new Users(),
    products: new Products(),
}