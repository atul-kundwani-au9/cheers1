import React , {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListheading';

const App =() =>{
  const [movies,setMovies] = useState([
    {
      Title:'Stars Wars',
      year:'1990',
      imdbID:'tt3896198',

      Rating:"",
      Reviews:"",
      Poster:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title:'Stars Wars',
      year:'1990',
      imdbID:'tt3896198',
      Rating:"",
      Reviews:"",
      Poster:'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    }
  ]);
  const getMovieRequest = async () => {
    const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=1d44a2a9`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search){
       setMovies(responseJson.Search)
    }
  }
 useEffect(()=>{
   getMovieRequest();
 } , []);   
   


  return (
    <div className="container movie-app">
      <div className='row d-flex align-items-center mb-4 mt-4'>
        <MovieListHeading heading = 'Movies'/>
        <MovieList movies = {movies}/>

      </div>
    </div>
  )
}
export default App;
