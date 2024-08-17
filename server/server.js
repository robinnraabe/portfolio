const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Express Middleware
app.use(bodyParser.json()); 
app.use(express.static('build'));

// Routes

// Listening server & port
app.listen(PORT, ()  => {
    console.log('Listening on port: ', PORT);
});