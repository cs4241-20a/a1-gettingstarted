

// const http = require('http'),
//       fs   = require('fs'),
//       port = 3000;

// const server = http.createServer( function( request,response ) {
//   console.log(request);
//   switch( request.url ) {
//     case '/style.css':
//       sendfile( response, 'style.css' );
//     case '/script.js':
//       sendfile( response, 'script.js' );
//     case '/index.html':
//       sendFile( response, 'index.html' )
//       break
//     default:
//       response.end( '404 Error: File Not Found' )
//   }
// })

// server.listen( process.env.PORT || port )

// const sendFile = function( response, filename ) {
//    fs.readFile( filename, function( err, content ) {
//      file = content
//      response.end( content, 'utf-8' )
//    })
// }

const http = require('http');
const fs = require('fs');

let index;
fs.readFile('index.html' , function (err, content) {
  index = content;
});

http.createServer( function(request, response) {

  switch (request.url) {
      case '/style.css':
      let css;
      fs.readFile('style.css' , function (err, content) {
        css = content;
        response.write(css, 'utf-8');
      });
      case '/script.js':
      let js;
      fs.readFile('script.js' , function (err, content) {
        js = content;
        response.end(js, 'utf-8');
      });
      break;
    default:
      response.write(index, 'utf-8');
      break;
  }
}).listen(3000);