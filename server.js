const http = require('http'),
    fs = require('fs'),
    port = 3000;

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/':
        case '/index.html':
            sendFile(response, 'index.html');
            break;
        default:
            response.statusCode = 404;
            response.end('File Not Found');
    }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
    fs.readFile(filename, function (err, content) {
        file = content;
        response.end(content, 'utf-8');
    });
};
