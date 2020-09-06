const http = require('http'),
      fs   = require('fs'),
      port = 3000
 


const memoizedFs = (response) => {
  let cache = {};
  return (fileName) => {
    if(fileName in cache) {
      let fileString = cache[fileName];
      if(!!response){
        response.end(fileString, 'utf-8');
      }
    }
    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err){
        if(!!cache['error.html'] && !!response){
          response.end(cache['error.html'], 'utf-8');
        }
        else if(!!response){
          //If for some reason fs never loaded the error response
          response.end( '404 Error: File Not Found' )
        }
        else{
          //Do nothing
        }
      }
      else {
        cache[fileName] = data;
        if(!!response) {
          response.end(data, 'utf-8');
        }
      }
    });
  }
}

const sendFile = (response, fileName) => {
  memoizedFs(response)(fileName);
}

const loadFile = (fileName) => {
  memoizedFs()(fileName);
}

//Loading index and error files
loadFile('index.html');
loadFile('error.html');

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
});



server.listen( process.env.PORT || port )

// const sendFile = function( response, filename ) {
//    fs.readFile( filename, function( err, content ) {
//      file = content
//      response.end( content, 'utf-8' )
//    })
// }

//Based off of https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e
