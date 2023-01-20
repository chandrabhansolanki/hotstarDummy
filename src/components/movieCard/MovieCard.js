import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import movie from "../Images/inception.jpg";
import MovieSlider from "../Slider/Slider";
import pre from "../Images/pre.png"
import next from "../Images/nxt.png"

const MovieCard = () => {
  const [allCards, setAllCards] = useState();

  useEffect(() => {
    const cards = async () => {
      await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=227ca934a62db96cb264d35e3ba7fce1", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          setAllCards(res?.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    cards();
  }, []);
  // console.log(allCards);

  const previousHandler = () => {

  }

  const nextHandler = ()=> {

  }
  return (
    <div className="cont">
      <MovieSlider />
      <h1 className="title">Latest & Trending</h1>


      <div className="mainContainer">
        <button className="pre-btn" onClick={previousHandler}><img src={pre} /></button>
        <button className="nxt-btn" onClick={nextHandler}><img src={next} /></button>
        <div className="allCardsContainer">
          {allCards?.map((item) => {
            return (
              <div key={item?.episode_id} className="container">
                <Link
                  className="cardContainer"
                  to="/details"
                  state={item}
                >
                  <img src={movie} alt="movie" />
                  <div className="card-data">
                    <h2> {item?.original_title || item?.original_name}</h2>
                    <h6>{item?.overview}</h6>
                  </div>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
export default MovieCard;
