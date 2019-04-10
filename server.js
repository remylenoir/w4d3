const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  } else if (request.url === "/ironhack") {
    response.write("Hello Ironhacker!");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("Page not found");
    response.end();
  }
});

server.listen(3000);
