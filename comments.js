// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the path "/comments"
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Start the web server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});