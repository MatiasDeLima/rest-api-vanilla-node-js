const http = require('http');
const { MongoClient } = require('mongodb')
const { getProducts, getProduct, createProduct } = require('./controllers/productController');
const { Console } = require('console');

const server = http.createServer((req, res) => {
    /*res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end()*/
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    } else if (req.url === 'api/products' && req.method === 'POST') {
        createProduct(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route not found' }))
    }
})

async function main() {

    const uri = "mongodb+srv://lucas123:admin@cluster0.jxpdgdi.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();

    try {
        await client.connect();

        await listDatabases(client);

        await createListing(client, {
            name: "lucas matias",
            summary: "mais um teste de javascript",
            bedrooms: 2,
            bathrooms: 1
        })

    } catch (e) {
        console.log(e)
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("produtos").collection("camisas").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`)
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:")
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}


const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));