import React from 'react';

const Movie = ({ title, description}) => (
    <div className='movieTitle' >
        <span className='movieName'>
            <h3>{title}</h3>
        </span> 
        <span className='movieDescription'>
            <h5>{description}</h5>
        </span>  
    </div>
)

export default Movie;

// class Movies extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <MovieList
//             movie={movies[i]}
//             />
//         )

//     };
// }



