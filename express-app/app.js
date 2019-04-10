const express = require("express");
const app = express();

// Declare a folder for static assets
app.use(express.static("assets"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/photo", (request, response) => {
  response.sendFile(`${__dirname}/views/photo.html`);
});

app.get("/ironhack", (request, response) => {
  response.send("Hello Ironhacker");
});

app.listen(3000);
