const express = require('express');
const app = express();

// Serve static files like videos and HTML
app.use(express.static(__dirname));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
