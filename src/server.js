const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);

    response.end();
};

http.createServer(onRequest).listen(port, ()=>{
    console.log(`Started ${port}`);
});