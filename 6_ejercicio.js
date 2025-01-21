

/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */



const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  

let pelisStarWars = {
    "1970": [],
    "1980": [],
    "1990": [],
    "2000": [],
    "2010": [],
}

function decadasStarWars(list){
    for (const movie of list) {
        if(movie.releaseYear < 1980){
            pelisStarWars['1970'].push(movie.title);
        } 
        else if(movie.releaseYear < 1990){
            pelisStarWars['1980'].push(movie.title);
        } 
        else if(movie.releaseYear < 2000){
            pelisStarWars['1990'].push(movie.title);
        } 
        else if(movie.releaseYear < 2010){
            pelisStarWars['2000'].push(movie.title);
        } 
        else {
            pelisStarWars['2010'].push(movie.title);
        }
    }
}

decadasStarWars(starWarsMovies)

console.log(pelisStarWars)