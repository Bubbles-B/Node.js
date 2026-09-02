"use strict";

// Import required modules
const port = 3000,
    http = require("http"), // Core Node.js module for creating HTTP server
    httpStatus = require("http-status-codes"), // Module for readable HTTP status codes
    router = require("./router"), // Custom router module to handle routes
    contentTypes = require("./contentTypes"), // Custom module that defines MIME types
    utils = require("./utils"); // Utility module for serving files

// Define route for home page (GET request)
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html); // Set response header to 200 OK with HTML content type
    utils.getFile("views/index.html", res); // Serve the index.html file
});

// Define route for courses page
router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

// Define route for contact page
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// Handle POST request to the root path (e.g., form submission)
router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res); // Serve a thank-you page
});

// Serve image file: graph.png
router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});

// Serve image file: people.jpg
router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});

// Serve image file: product.jpg
router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});

// Serve image file: cat.jpg
router.get("/cat.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/cat.jpg", res);
});

// Serve stylesheet: confetti_cuisine.css
router.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});

// Serve stylesheet: bootstrap.css
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

// Serve JavaScript file: confetti_cuisine.js
router.get("/confetti_cuisine.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confetti_cuisine.js", res);
});

// Create and start the HTTP server, listening on the defined port
http.createServer(router.handle).listen(port);

// Log a message to the console once the server is running
console.log(`The server is listening on port number: ${port}`);

/*
Note:
utils.getFile is a utility function that reads the specified file
(e.g., HTML, CSS, JS, images) from the file system and streams it
as the response to the client.
*/
