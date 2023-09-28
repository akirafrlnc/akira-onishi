const express = require('express');
const app = express();
const router = express.Router();
// Define API endpoints below
// router.get('/movies', getNowPlaying);
const moviesController = require('./controllers/movies');

// Define the route for fetching "Now Playing" movies
app.get('/now-playing', moviesController.getNowPlaying);

module.exports = router;

// Middleware setup (e.g., body parsing, CORS)
app.use(express.json()); // JSON body parsing middleware
// Add middleware here
const moviesHandlers = require('./controllers/movies');

// Use the handler in route definition
router.get('/movies', moviesHandlers.getNowPlaying);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Start the server
const PORT = process.env.PORT || 3000; // Use the environment variable or port 3000 by default
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
