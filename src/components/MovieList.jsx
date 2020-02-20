import React from 'react';
import Movie from './Movie.jsx';
import movies from '../data.js';

const MovieList = () => (
    <div className="movieList">
        {movies.map((movie, i) => (
            <Movie 
                title={movie.title}
                description={movie.body}
                key={i}
            />
        ))}
    </div>
)

export default MovieList;

// class MovieList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {

//     }
// }