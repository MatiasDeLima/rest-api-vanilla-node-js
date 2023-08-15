const http = require('http');

const products = require('./data/products')

const server = http.createServer((req, res) => {
    /*res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end()*/
    if (req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));