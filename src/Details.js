import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Details.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = "<API_KEY>";
function Details() {
  const [movieData, setmovieData] = useState("");

  const history = useHistory();
  console.log(history.location.state.movieId);
  const movieId = history.location.state.movieId;
  useEffect(() => {
    axios
      .get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response);
        setmovieData(response);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div className="details">
      <img
        src={
          movieData
            ? `${base_url}${
                movieData.data.backdrop_path || movieData.data.poster_path
              }`
            : null
        }
        alt="movie poster"
      />
      <h2>
        {movieData
          ? movieData.data.title || movieData.data.original_name
          : null}
      </h2>
      <p>{movieData ? movieData.data.overview : null}</p>
    </div>
  );
}
export default Details;
