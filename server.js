const http = require('http'),
      fs   = require('fs'),
      port = 3000;

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
    case '/index.html':
      sendFile(response, 'index.html');
      break;
    case '/style_sheet.css':
      sendFile(response, 'style_sheet.css');
      break;
    case '/ProfilePicture.jpg':
      sendFile(response, 'ProfilePicture.jpg');
      break;
    default:
      response.end( '404 Error: File Not Found' )
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     let file = content;
     response.end( content, 'utf-8' )
   })
};
