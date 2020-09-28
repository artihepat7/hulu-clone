import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "./axios";
import requests from "./requests";

import { useHistory } from "react-router";

function Results(props) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(props.fetcheNav || requests.fetchTrending)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.fetcheNav]);

  const movieClickHandler = (event, movieId) => {
    console.log(event, props);
    history.push({
      pathname: "/details",
      state: { movieId: movieId },
    });
  };

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard
          key={movie.id}
          movie={movie}
          clicked={(event) => {
            movieClickHandler(event, movie.id);
          }}
        />
      ))}
    </div>
  );
}

export default Results;
