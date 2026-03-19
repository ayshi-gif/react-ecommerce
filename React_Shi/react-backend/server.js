// Import required packages
const express = require("express");
const cors = require("cors");

// Import product data from the data folder
const products = require("./data/products");

// Create an Express application
const app = express();

// Enable CORS so React can access this backend
app.use(cors());

// Middleware to allow JSON request bodies
app.use(express.json());

/*
    API Endpoint: GET /api/products
    Purpose: Return all products as JSON
*/
app.get("/api/products", (req, res) => {
    res.json(products); //Send product array to the client   
});

/*
Root Route: Just to confirm the server works
*/
app.get("/", (req, res) => {
    res.send("E-Commerce Product API is running...");
});

/*
    API Endpoint: GET /api/categories
    Purpose: Return a list of unique categories extracted from product data [cite: 353, 354]
*/
app.get("/api/categories", (req, res) => {
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

// Start server on port 5000
app.listen(5000, () => {
    console.log("Backend server running at http://localhost:5000");
});