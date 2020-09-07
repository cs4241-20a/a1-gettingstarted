const http = require('http'),
      fs   = require('fs'),
      port = 3000
      routes = [
        'error',
        'home',
      ];

//Based off of https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e
const memoizedFs = (response) => {
  let cache = {};
  return (fileName) => {
    if(fileName in cache) {
      let fileString = cache[fileName];
      if(!!response){
        response.end(fileString);
      }
    }
    fs.readFile(fileName, (err, data) => {
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
          response.end(data);
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
  if(request.url === '/'){
    sendFile( response, 'index.html' );
  }
  else if((routes.indexOf(request.url.slice(1)) !== -1)){
   sendFile( response, request.url.concat('.html').slice(1) );
  }
  else{
    sendFile(response, request.url.slice(1));
  }
});

server.listen( process.env.PORT || port )