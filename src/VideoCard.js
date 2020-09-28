import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard(props) {
  return (
    <div className="videoCard" onClick={props.clicked}>
      <img
        src={`${base_url}${
          props.movie.backdrop_path || props.movie.poster_path
        }`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="…"
        text={props.movie.overview}
      />

      <h2>{props.movie.title || props.movie.original_name}</h2>
      <p className="likes">
        {props.movie.release_date || props.movie.first_air_date} .
        <ThumbUpIcon /> {props.movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
