const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  console.log(request.url);

  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    default:
      sendFile(response, request.url.replace("/", ""));
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    file = content;
    response.end(content);
  });
};
