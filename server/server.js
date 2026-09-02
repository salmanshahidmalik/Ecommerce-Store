// Import the Express framework
import express from 'express';
import products from "../src/data/products.js" 
import cors from "cors";

// Initialize the Express application
const app = express();
app.use(cors());
app.get("/products", (req, res) => {
  res.status(200).json(products);
});


// Start the server on port 5000 and log a success message
app.listen(3000, () => {
  console.log('Express server started successfully on port 3000!!!');
});
