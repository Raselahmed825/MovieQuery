var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded", year: "2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Epic", year: "2013", length: 105, rating: "6.7", genre: "Animation" }
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}

var newMovie = {title:"Frozen" , year: "2013", length: 109, rating: "7.5", genre: "Animation"};
console.log(addMovie(newMovie));

function movieByRating(){

}

console.log(movieByRating());

function findByTitle( title ){
  //add code
}

console.log(findByTitle("matrix"));
