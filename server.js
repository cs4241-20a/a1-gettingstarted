const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {

  switch( request.url ) {
    
    case '/':
      console.log(request.url)
      sendFile( response, 'index.html' )
      break
    
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    
    case '/style.css':
      sendFile(response, 'style.css')
      break

    case '/assets/linkedin.png':
      sendFile(response, "assets/linkedin.png")
      break
  
    case '/assets/github.png':
      sendFile(response, "assets/github.png")
      break

    default:
      response.end( '404 Error: File Not Found' )
      console.log("here?")
      //sendFile( response, request.url )
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
      response.end( '404 Error: File Not Found' )
      console.log("or here?")
      //sendFile( response, request.url )
     }
     file = content
     response.end( content, 'utf-8' )
   })
}
