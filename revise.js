const { profileEnd } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/api/products' === req.method === 'GET') {

    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server litening on port: ${PORT}`);
})