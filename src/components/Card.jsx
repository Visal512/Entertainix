import { useState, useEffect } from "react";
import axios from "axios";

import Certification from "./InfoComponents/Certification";
import Date from "./InfoComponents/Date";
import CardOverview from "./InfoComponents/CardOverview";

const Card = ({ id, type }) => {
  const [name, setName] = useState([]);
  const [poster, setPoster] = useState("");
  const [backdrop, setBackdrop] = useState("");

  const fetchData = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );

      setName(data.title);
      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/w300/" + data.poster_path);
      } else {
        setPoster("https://via.placeholder.com/100x150");
      }

      if (data.backdrop_path?.length > 0) {
        setBackdrop(
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/w1280/" +
            data.backdrop_path +
            "')"
        );
      } else {
        setBackdrop("https://via.placeholder.com/300x85");
      }
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setName(data.name);
      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/w1280/" + data.poster_path);
      } else {
        setPoster("https://via.placeholder.com/100x150");
      }
      if (data.backdrop_path?.length > 0) {
        setBackdrop(
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/w1280/" +
            data.backdrop_path +
            "')"
        );
      } else {
        setBackdrop("https://via.placeholder.com/300x85");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  var card_style = {
    backgroundImage: backdrop,
  };

  return (
    <div className="card_box prevent_select" style={card_style}>
      <div className="card_box_div">
        <img className="card_box_img" src={poster} />
        <div style={{ padding: "3px" }}></div>
        <div className="card_box_content">
          <span className="card_title" title={name}>
            {name}
          </span>
          <div style={{ padding: "0px" }}></div>
          <div className="card_box_more_info">
            <Certification type={type} id={id} />
            <span>{type === "movie" ? <>Film</> : <>TV</>}</span>
            <Date type={type} id={id} />
            <CardOverview type={type} id={id} />
          </div>
        </div>
        <div style={{ padding: "3.75px" }}></div>
      </div>
    </div>
  );
};

export default Card;
