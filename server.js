const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function(request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    case "/styles.css":
      sendFile(response, "styles.css");
      break;
    case "/images/apple.jpg":
      sendFile(response, "images/apple.jpg");
      break;
    case "/images/NY.jpg":
      sendFile(response, "images/NY.jpg");
      break;
    case "/images/beach.jpg":
      sendFile(response, "images/beach.jpg");
      break;
    case "/images/classes.PNG":
      sendFile(response, "images/classes.PNG");
      break;
    case "/images/user_experience.PNG":
      sendFile(response, "images/user_experience.PNG");
      break;
    case "/images/code.PNG":
      sendFile(response, "images/code.PNG");
      break;
    case "/images/space.PNG":
      sendFile(response, "images/space.PNG");
      break;
    case "/images/cats.jpg":
      sendFile(response, "images/cats.jpg");
      break;
    case "/images/alphagam.jpeg":
      sendFile(response, "images/alphagam.jpeg");
      break;
    default:
      response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port);

const sendFile = function(response, filename) {
  fs.readFile(filename, function(err, content) {
    file = content;
    response.end(content, "utf-8");
  });
};
