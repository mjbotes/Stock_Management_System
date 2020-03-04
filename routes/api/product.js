const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const db_conn = require('../../database');

//@route    GET api/products/
//@desc     Get all the products and stock in Warehouse
//@acess    Private
router.get('/', (req, res) => {
  try {
    db_conn.executeQuery(res, 'getAllProducts()').toArray();
    console.log(res);
  } catch {
    console.log('Ohh no');
  }
});

//@route    GET api/products/catergory/:catergoryName
//@desc     Get all the products and stock in Warehouse in that catergory
//@acess    Private
router.get('/catergory/:catergoryName', (req, res) => {
    db_conn.executeQuery(res, `getAllProductsInCatergory(${req.params.catergoryName})`).toArray();
    console.log(res);1
})

//@route    GET api/products/search/:search
//@desc     Get all the products searched for
//@acess    Private
router.get('/search/:search', (req, res) => {
    db_conn.executeQuery(res, `searchProducts(${req.params.search})`),toArray();
    console.log(res);
})

//@route    POST api/products/insert/
//@desc     Inserts a product into a database
//@acess    Private
router.post('/insert/', (req, res) => {
    db_conn.executeQuery(res, `insertProduct(${})`)
})

module.exports = router;
