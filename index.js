const http = require('http');
const createHandler = require('./src/requestHandler');
const services = require('./src/services');
const createStorage = require('./src/plugins/storage');
const createAuth = require('./src/plugins/auth');

const settings = require('./settings.json');

const plugins = [
    createStorage(settings),
    createAuth(settings)
];

const server = http.createServer(createHandler(plugins, services));

const port = 3000;
server.listen(port);
console.log(`Server started on port ${port}. You can make requests to http://localhost:${port}/`);