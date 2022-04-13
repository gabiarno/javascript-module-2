/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
/*
iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

*/
function showMovies(movies) {
  let allMoviesE = document.querySelector("#all-movies");
  let alertE = document.querySelector(".alert");
  allMoviesE.innerHTML = "";
  allMoviesE.append(alertE);
  console.log(allMoviesE);
  let moviesNumber = movies.length;
  let moviesNumberE = document.querySelector("#movies-number");
  console.log();
  moviesNumberE.textContent = moviesNumber;
  movies.forEach(movie => {
    let pMovieE = document.createElement("p");
    pMovieE.textContent = `${movie.title} - ${movie.director}`;
    console.log("pMovieE",pMovieE);
    allMoviesE.append(pMovieE);
    
  });
}

//showMovies(movies);
/*
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?
*/

const myTimeout = setTimeout(showMovies, 1000, movies);

// create a new movie object for your favorite movie
var favoriteMovies = 
  {
    title: "Lord of the Rings",
    director: "Peter Jackson",
    type: "sci-fi",
    haveWatched: true,
  }

// create addMovies function
function addMovies(movie) {
  setTimeout(() => {
    movies.push(movie);
    showMovies(movies);
  }, 2000);
}

addMovies(favoriteMovies);

/**
 * Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3
 */

function createForm() {
  let mainE = document.querySelector("#main");
  let formE = document.createElement("form");
  let title_labE = document.createElement("label").value="Title";
  let titleE = document.createElement("input");
  let directorE = document.createElement("input");
  let director_labE = document.createElement("label").value="Director";
  let typeE = document.createElement("input");
  let type_labE = document.createElement("label").value="Type"; 
  let haveWatchedE = document.createElement("input");
  let haveWatched_labE = document.createElement("label").value="Have you watched?";
  
  let bottonE = document.createElement("button");
 bottonE.innerHTML = "Submit";
 bottonE.type = "submit";
 bottonE.name = "formBtn";
formE.appendChild(bottonE);
 bottonE.addEventListener("click", event => {
   event.preventDefault();
   let myNewMovie = {
    title: titleE.value,
    director: directorE.value,
    type: typeE.value,
    haveWatched: haveWatchedE.value,
   }
   console.log("myNewMovie",myNewMovie);
   addMovies(myNewMovie);
 });
 formE.append(title_labE,titleE,director_labE,directorE,type_labE,typeE,haveWatched_labE,haveWatchedE,bottonE);
 mainE.append(formE);
}

 setTimeout(createForm, 1000);
