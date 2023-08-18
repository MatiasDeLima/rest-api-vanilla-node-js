// model mexe com a parte dos dados ou banco de dados
// o model se comunica com o controller
const products = require('../data/products')

// pega todos os dados de produtos
function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

// pega o dados por id do produto
function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

// cria produto com id 
function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: id, ...product}
        products.push(newProduct)
    })
}

module.exports = {
    findAll,
    findById,
    create
}