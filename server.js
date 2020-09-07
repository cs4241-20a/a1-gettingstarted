const path = require('path')
const fs = require('fs')

const static_path = path.join(__dirname, 'public');
const http = require('http'),
      port = 3000

const static_files = new Set()

fs.readdirSync(static_path).forEach(file => {
  static_files.add(file)
})

Object.freeze(static_files)

const server = http.createServer( function( request,response ) {
  let http_path = request.url
  if (http_path.startsWith('/')){
    http_path = http_path.substring(1)
  }

  if (static_files.has(http_path)) {
    sendFile(response, http_path)
  }
  else if (http_path === undefined || http_path == '') {
    sendFile(response, 'index.html')
  }
  else {
    response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  filename = path.join(static_path, filename)
  fs.readFile( filename, function( err, content ) {
    file = content
    response.end( content, 'utf-8' )
  })
}
