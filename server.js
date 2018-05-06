//MOVIE APP

//BOILERPLATE CODE
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

app.use(express.static('public'));
const movieArray = getMovies();
app.get('/', (req, res) => {
    res.render('index', { movies: movieArray });
});

// function returns sample data re. movie that templates use to render html

function getMovies() {
    return [{
        movieID: '1',
        title: 'Blade Runner',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'

    },
    {
        movieID: '2',
        title: 'It Follows',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '3',
        title: 'Titanic',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '4',
        title: 'Amelie',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '5',
        title: 'Chicago',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '6',
        title: 'Shawshank Redemption',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '7',
        title: 'Orgazmo',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '8',
        title: 'The Matrix',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        movieID: '9',
        title: 'Princess Bride',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    }
    ]
}

//gets search term from user and searches our massive database for matches.
app.get('/search/', (req, res) => {
    let searchTerm = req.query.searchRequest.toLowerCase();
    let searchQuery = movieSearch(searchTerm);
    res.render('index', { movies: searchQuery });
});

//route to send user to appropriate movie details page
app.get('/movie/:i', (req, res) => {
    let chosenMovie = req.params.i;
    let userMovie = movieArray[chosenMovie];
    res.render('movie',  {userMovie: userMovie} )
 if (userMovie = null);
    return ("please enter oneof the only nine movies ever in the history of movies.")
});

//route to take in user query via search box
const movieSearch = (title) => {
    let foundMovies = []
    for (let i = 0; i < movieArray.length; i++)
        if (movieArray[i].title.toLowerCase().indexOf(title) > -1) {
            foundMovies.push(movieArray[i])
        }
    return foundMovies;

}






