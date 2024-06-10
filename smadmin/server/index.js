const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// const path = require('path');
const router = require('./routers/router');
const cors = require('cors');

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Use the router
app.use('/', router);

// Start the server
try {
    app.listen(PORT, () => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
    });
} catch (error) {
    console.error(`Error starting server: ${error.message}`);
}
