const express = require('express'); // importing express to be used in the server.js file
const postsRouter = require('./posts/posts-router')
const server = express(); // this invokes express

server.use(express.json()); // configures the data to a json format



server.use('/api/posts', postsRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    });
}); // this is a default I believe

module.exports = server 