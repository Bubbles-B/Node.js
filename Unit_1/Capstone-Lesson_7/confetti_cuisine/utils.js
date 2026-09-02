"use strict";

// Import the 'fs' module for file system operations
const fs = require("fs");

// Import HTTP status codes for consistent response status management
const httpStatus = require("http-status-codes");

// Import content types (e.g., 'text/html', 'application/json') from a local module
const contentTypes = require("./contentTypes");

// Export an object with a function named 'getFile' that handles reading and serving files
module.exports = {
    // Function to read a file and send its content in the HTTP response
    getFile: (file, res) => {
        // Read the file asynchronously from the filesystem
        fs.readFile(`./${file}`, (error, data) => {
            // If an error occurs while reading the file (e.g., file not found)
            if (error) {
                // Set HTTP response status to 500 Internal Server Error with content type from 'contentTypes'
                res.writeHead(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
                // Send an error message as the response body
                res.end("There was an error serving content!");
            }
            // If file is read successfully, send the file content in the response
            res.end(data);
        });
    }
};
