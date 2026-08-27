// Import the Express framework
import express from 'express';

// Initialize the Express application
const app = express();

// Start the server on port 5000 and log a success message
app.listen(5000, () => {
  console.log('Express server started successfully on port 5000!!!');
});
