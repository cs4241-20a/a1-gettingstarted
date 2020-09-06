"strict mode";

const http = require('http');
const fs = require('fs');

let index;
fs.readFile('index.html', function(err, content) {
	index = content;
});

fs.readFile('assets/otogecon.jpg', function(err, content) {
	picture = content;
});

http.createServer(function(request, response) {
	switch(request.url) {
		case '/style.css':
			fs.readFile('style.css', function(err, content) {
				response.end(content, 'utf-8');
			});
			break;
		case '/assets/otogecon.jpg':
			fs.readFile('assets/otogecon.jpg', function (err, content) {
				response.end(content, 'utf-8');
			});
			break;
		default:
			response.end(index, 'utf-8');
	}
}).listen(3000);
