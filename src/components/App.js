import React from 'react';
import "../main.css";
import MovieList from "./MovieList.jsx";
import Search from "./Search.jsx";

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="top">
        <div className="header2">
          Check out the top 10 movies currently on Netflix below
        </div>
        <div className="search">
          <Search/>
          
        </div>
        <div className="searchResults">
    
        </div>
        <div className="movieList">
          <MovieList/>
        </div>
      </div>
    )
  }
}

export default App;
