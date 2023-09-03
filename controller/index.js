const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const {users,products} = require('../model');
const { verifyAToken } = require("../middleware/AuthenticateUser");
// console.log(users);
// return;
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
});
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
});
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
});

routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
});

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
});

routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
});

routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
});

routes.get("/products", (req, res) => {
    products.fetchProducts(req, res)
  });
  routes.get("/product/:prodID", (req, res) => {
    products.fetchProduct(req, res)
  });
  routes.post("/product", bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
  });
  routes.patch("/product/:prodID", bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
  });
  routes.delete("/product/:prodID", (req, res) => {
    products.removeProduct(req, res)
  });

module.exports = {
    express,
    routes,
    verifyAToken
}