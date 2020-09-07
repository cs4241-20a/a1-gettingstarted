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
    case '/css/index.css':
      sendFile( response, 'css/index.css')
      break
    case '/images/brittany.jpg':
      sendFile( response, 'images/brittany.jpg')
      break
    case '/images/alphagam.JPG':
      sendFile( response, 'images/alphagam.JPG')
      break
    case '/images/stepteam.PNG':
      sendFile( response, 'images/stepteam.PNG')
      break
    case '/images/sas.JPG':
      sendFile( response, 'images/sas.JPG')
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