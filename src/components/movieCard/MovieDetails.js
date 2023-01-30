import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MovieDetails.css";
import backGroundImage from "../Images/inception.jpg";

const MovieDetails = () => {
  const location = useLocation();
  const [allCards, setAllCards] = useState(location?.state);
  // console.log(allCards);
  return (
    <div className="movieDetailsContainer">
      <div className="backgroundImage">
        <img src={`https://image.tmdb.org/t/p/original${allCards?.backdrop_path}`} alt="background" />
      </div>
      <div className="movieDetails">
        <h1 style={{ color: "white" }}>{allCards?.original_title || allCards?.original_name}</h1>
        {/* <span>Episode : {allCards?.episode_id}</span>
        <span>Director : {allCards?.director}</span>
        <span>Producer : {allCards?.producer}</span> */}
      </div>
      <div className="releaseDate">
        <span>Release Date : {allCards?.first_air_date || allCards?.release_date}</span>
      </div>
      <div className="movieInfo">
        <p>{allCards?.overview}</p>
      </div>
    </div>
  );
};
export default MovieDetails;
