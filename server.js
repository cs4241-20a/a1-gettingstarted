const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
        sendFile( response, 'style.css' )
        break
    case '/images/rain.gif':
        sendFile( response, 'images/rain.gif' )
        break
    case '/scripts/three.js':
        sendFile( response, 'scripts/three.js' )
        break
    case '/scripts/script.js':
        sendFile( response, 'scripts/script.js' )
        break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
