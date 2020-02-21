import Search from "./components/Search.jsx"

let movies = [
    {
        title: 'Mean Girls',
        body: "this is the description of the movie"
    },
    {
        title: 'Hackers',
        body: "this is the description of the movie"
    },
    {
        title: 'The Grey',
        body: "this is the description of the movie"
    },
    {
        title: 'Sunshine',
        body: "this is the description of the movie"
    },
    {
        title: 'Ex Machina',
        body: "this is the description of the movie"
    }
];


// console.log("in data = ", Search)
// if (Search.length !== 0) {


// ======== functional =======
// let movies;
let result = function(){
    if (Search.length === 0) {
        movies = [
            {
                title: 'Mean Girls',
                body: "this is the description of the movie"
            },
            {
                title: 'Hackers',
                body: "this is the description of the movie"
            },
            {
                title: 'The Grey',
                body: "this is the description of the movie"
            },
            {
                title: 'Sunshine',
                body: "this is the description of the movie"
            },
            {
                title: 'Ex Machina',
                body: "this is the description of the movie"
            }
        ];
    }
    else {
        return Search
    }
}
result()

export default movies;