const express = require('express')
const router = express.Router()

const { createUser, login } = require('../Controllers/userController')
const { createProduct, getAllProducts, getProductsById } = require('../Controllers/productController')

//USER
router.post('/users', createUser)
router.post('/login', login)

//product
router.post('/products', createProduct)
router.get('/products', getAllProducts)
router.get('/products/:id', getProductsById)


module.exports = router