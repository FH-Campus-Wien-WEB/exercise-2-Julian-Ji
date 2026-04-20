const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  const myMovies = [
    {
      "Title": "The Martian",
      "Released": "2015-10-02",
      "Runtime": 144,
      "Genres": ["Adventure", "Drama", "Sci-Fi"],
      "Directors": ["Ridley Scott"],
      "Writers": ["Drew Goddard", "Andy Weir"],
      "Actors": ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
      "Plot": "An astronaut becomes stranded on Mars after his team assumes him dead...",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg",
      "Metascore": 80,
      "imdbRating": 8.0
    },
    {
      "Title": "Whiplash",
      "Released": "2014-10-15",
      "Runtime": 106,
      "Genres": ["Drama", "Music"],
      "Directors": ["Damien Chazelle"],
      "Writers": ["Damien Chazelle"],
      "Actors": ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
      "Plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 89,
      "imdbRating": 8.5
    },
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Released": "1977-05-25",
      "Runtime": 121,
      "Genres": ["Action", "Adventure", "Fantasy"],
      "Directors": ["George Lucas"],
      "Writers": ["George Lucas"],
      "Actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station...",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 90,
      "imdbRating": 8.6
    }
  ];
  res.json(myMovies);
});

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  res.sendStatus(404)
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

