// no contorller fica a parte das funcionalidades tipo GET POST PUT DELETE
// o controller se comunica com o server
const Product = require('../models/productModel')

// get all products
async function getProducts(req, res) {
    try {
        const  products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

// get single product id:
async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)

        if(!product) {

            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product not found'}))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}

// create product
async function createProduct(req, res) {
    try {
        const product = {
            title: 'Test Product',
            description: '',
            price: 100
        }

        const newProduct = Product.create(product)

        res.writeHead(201, { 'Content-Type' : 'application/json' })
        return res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}