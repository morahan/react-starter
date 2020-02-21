import React from 'react';
import "../main.css";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";
import movies from "../data.js"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movies,
      searchInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchData = this.searchData.bind(this);

  }

  handleChange(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  searchData() {
    let results = [];
    let input = this.state.searchInput;
    this.state.movies.filter(movie => {
      if (movie.title.toLowerCase().includes(input.toLowerCase())) {
        results.push(movie)
      }
    })
    this.setState({ movies: results })

    console.log(results)
    if (results.length === 0) {
      return "Sorry, your search term is not a top 10 Netflix movie!-(";
    } else {
      return results;
    }

    // this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render(){
    return (
      <div className="top">
        <div className="header2">
          Check out the top 10 movies currently on Netflix below
        </div>
        <div className="search">
          <Search 
          searchData={this.searchData}
          handleChange={this.handleChange}
          />
          
        </div>
        <div className="searchResults">
    
        </div>
        <div className="movieList">
          {this.state.movies.length > 0 ? 
          (
            <MovieList
            movies={this.state.movies}
            /> 
            ) : <div><h2>Sorry, your search term is not a top 10 Netflix movie</h2></div>}
        </div>
      </div>
    )
  }
}

export default App;
