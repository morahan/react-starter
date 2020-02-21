import React from "react"

import movies from "../data.js"


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
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
        movies.filter(movie => {
            if (movie.title.toLowerCase().includes(input.toLowerCase())) {
                results.push(movie)
            }
        })
       
        console.log(results)
        if (results.length === 0) {
            return "Sorry, your search term is not a top 10 Netflix movie!-(";
        } else {
            return results;
        }
    }


    render(){
        return(
            <div className="search">
                <input type="text" placeholder="Search for a movie" className="searchInput" onChange={this.handleChange}/>
                <button className="searchSubmit" onClick={this.searchData}>Submit</button>

                <div className="searchResults">
                    {/* {searchData} */}
                </div>
            </div>
            // { searchData(this.state.searchInput)}
        )
    }
}




export default Search;