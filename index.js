const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const pokemonRoutes = require('./pokemonRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use('/pokemon', pokemonRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
