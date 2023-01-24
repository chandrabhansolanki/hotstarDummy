import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import movie from "../Images/inception.jpg";
import MovieSlider from "../Slider/Slider";
import pre from "../Images/pre.png"
import next from "../Images/nxt.png"

const MovieCard = () => {
  const [allCards, setAllCards] = useState();
  const [active, setActive] = useState(0)
  let slides = 20
  console.log(allCards);


  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)"
    };
  };

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
    // console.log(active > 0 && setActive(active - 1));
    // active > 0 && setActive(active - 1)

  }

  const nextHandler = () => {
    // console.log( active < slide - 1 && setActive(active + 1));
    // active < slides - 1 && setActive(active + 1)
  }
  console.log(active);
  return (
    <div className="cont">
      <MovieSlider />
      <h1 className="title">Latest & Trending</h1>
      <div className="mainContainer">
        <button className="pre-btn" onClick={() => previousHandler()}><img src={pre} /></button>
        <button className="nxt-btn" onClick={() => nextHandler()}><img src={next} /></button>
        <div className="allCardsContainer" style={setSliderStyles()}>
          {allCards?.map((item) => {
            return (
              <div key={item?.episode_id} className="container">
                <Link
                  className="cardContainer"
                  to="/details"
                  state={item}
                >
                  <img src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="movie" />
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
