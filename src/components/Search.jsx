import React from "react"

import movies from "../data.js"


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            searchInput: e.target.value
        })
        
        // // ===== search results below;
        let results = [];
        let input = this.state.seachInput;
        input = JSON.stringify(input);
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title.search(input)) {
                results.push(movies[i]);
            }
        }
        if (results.length === 0) {
            return "Sorry, your search term is not a top 10 Netflix movie!-(";
        } else {
            return results;
        }
        // // ======
    }

    // searchData(input) {
    //     let results = [];
    //     input = JSON.stringify(input);
    //     for (let i = 0; i < movies.length; i++) {
    //         if (movies[i].title.search(input)) {
    //             results.push(movies[i]);
    //         }
    //     }
    //     if (results.length === 0) {
    //         return "Sorry, your search term is not a top 10 Netflix movie!-(";
    //     } else {
    //         return results;
    //     }
    // }


    render(){
        return(
            <div className="search">
                <input type="text" placeholder="Search for a movie" className="searchInput" onChange={this.handleChange}/>
                <button className="searchSubmit" onSubmit={this.searchData}>Submit</button>

                <div className="searchResults">
                    {/* {searchData} */}
                </div>
            </div>
            // { searchData(this.state.searchInput)}
        )
    }
}




export default Search;