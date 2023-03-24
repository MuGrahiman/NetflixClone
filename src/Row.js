import React, { useEffect, useState } from "react";
import axios from "./axios";
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl,isLargeRow }) {
  const API_KEY = 'cfa01d35ccdab0502577d260e66bfac1';
  const [movies, setMovies] = useState([]); 
   const [trailerUrl, setTrailerUrl] = useState("")
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts={
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0 ,
    }
  }
 const handleClick =(movie)=>{
  if (trailerUrl) {
    setTrailerUrl("")
  }else{
    // axios
    // .get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
    // .then((response) => {
    //   if (response.data.results.length != 0) {
    //     console.log(response.data.results[0].key)
    //     movieTrailer(response.data.results[0]);
    //   } else {
    //     console.log("Array empty");
    //   }   
    // });
 
    movieTrailer(movie?.name ||"")
    .then(url=>{
const urlParams = new URLSearchParams( new URL(url).search);

setTrailerUrl( urlParams.get('v'))

    }).catch((erro)=>console.log(erro+" error in setting url"))
    
  }
 }
  return (
    <div className="row">
      <h1> {title} </h1>
      <div className="row_posters ">
        {movies.map((movie) => (
          <img
          className={`row_poster ${isLargeRow && 'row_posterLarge'}`} 
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
            onClick={()=>handleClick(movie)}
            alt={movie.name}
          />
        ))}
      </div>
{trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
