/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
const movies = {
    "tt3659388": {
        imdbID: "tt3659388",
        Title: "The Martian",
        Released: "2015-10-02",
        Runtime: 144,
        Genres: ["Adventure", "Drama", "Sci-Fi"],
        Directors: ["Ridley Scott"],
        Writers: ["Drew Goddard", "Andy Weir"],
        Actors: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"],
        Plot: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_QL75_UY148_CR0,0,100,148_.jpg",
        Metascore: 80,
        imdbRating: 8.0
    },
    "tt2582802": {
        imdbID: "tt2582802",
        Title: "Whiplash",
        Released: "2014-10-10",
        Runtime: 106,
        Genres: ["Drama", "Music"],
        Directors: ["Damien Chazelle"],
        Writers: ["Damien Chazelle"],
        Actors: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
        Plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
        Metascore: 89,
        imdbRating: 8.5
    },
    "tt0076759": {
        imdbID: "tt0076759",
        Title: "Star Wars: Episode IV - A New Hope",
        Released: "1977-05-25",
        Runtime: 121,
        Genres: ["Action", "Adventure", "Fantasy"],
        Directors: ["George Lucas"],
        Writers: ["George Lucas"],
        Actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station.",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_QL75_UX100_CR0,3,100,148_.jpg",
        Metascore: 90,
        imdbRating: 8.6
    }
};
module.exports = movies;