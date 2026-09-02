"use strict";

// Import HTTP status codes module
const httpStatus = require("http-status-codes");

// Import content types (e.g., text/html, application/json)
const contentTypes = require("./contentTypes");

// Import utility functions (e.g., for reading files)
const utils = require("./utils");

// Initialize an object to store route handlers for GET and POST methods
const routes = {
    GET: {},   // For GET requests
    POST: {}   // For POST requests
};

// Main request handler function
exports.handle = (req, res) => {
    try {
        // Attempt to call the corresponding route handler based on request method and URL
        routes[req.method][req.url](req, res);
    } catch (e) {
        // If route is not found or an error occurs, serve the error page
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

// Register a GET route handler for a specific URL
exports.get = (url, action) => {
    routes["GET"][url] = action;
};

// Register a POST route handler for a specific URL
exports.post = (url, action) => {
    routes["POST"][url] = action;
};

