import { useState, useEffect } from "react";
import axios from "axios";

import Name from "./InfoComponents/Name";
import Certification from "./InfoComponents/Certification";
import Date from "./InfoComponents/Date";
import Rating from "./InfoComponents/Rating";
import Time from "./InfoComponents/Time";
import GenresList from "./InfoComponents/GenresList";
import Directors from "./InfoComponents/Directors";
import Makers from "./InfoComponents/Makers";
import ReleaseDates from "./InfoComponents/ReleaseDates";
import Overview from "./InfoComponents/Overview";
import Cast from "./InfoComponents/Cast";

const MoreInfo = ({ type, id }) => {
  const [poster, setPoster] = useState("");
  const [backdrop, setBackdrop] = useState("");
  const [backdropLink, setBackdropLink] = useState("");

  const fetchData = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );

      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/original/" + data.poster_path);
      } else {
        setPoster("https://via.placeholder.com/1250x1850");
      }

      if (data.backdrop_path?.length > 0) {
        setBackdrop(
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/original" +
            data.backdrop_path +
            "')"
        );
      } else {
        setBackdrop("https://via.placeholder.com/1850x2740");
      }

      if (data.backdrop_path?.length > 0) {
        setBackdropLink(
          "https://image.tmdb.org/t/p/original/" + data?.backdrop_path
        );
      } else {
        setBackdropLink("https://via.placeholder.com/1850x2740");
      }
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/original" + data.poster_path);
      } else {
        setPoster("https://via.placeholder.com/1250x1850");
      }

      if (data.backdrop_path?.length > 0) {
        setBackdrop(
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/original" +
            data.backdrop_path +
            "')"
        );
      } else {
        setBackdrop("https://via.placeholder.com/1850x2740");
      }

      if (data.backdrop_path?.length > 0) {
        setBackdropLink(
          "https://image.tmdb.org/t/p/original/" + data?.backdrop_path
        );
      } else {
        setBackdropLink("https://via.placeholder.com/1850x2740");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="more" style={{ backgroundImage: backdrop }}>
      <div className="more_div">
        <img className="more_img_portrait prevent_select" src={poster} />
        <div className="more_content">
          <img
            className="more_img_landscape prevent_select"
            src={backdropLink}
          />
          <div className="more_landscape_div_spacing"></div>
          <div style={{ padding: "10px" }}>
            <h1>
              <Name type={type} id={id} />
            </h1>
            <div className="more_content_info">
              <Certification type={type} id={id} />
              <span>{type === "movie" ? <>Film</> : <>TV</>}</span>
              <Date type={type} id={id} />
              <Rating type={type} id={id} />
              <Time type={type} id={id} />
            </div>
            <div className="more_extra_info">
              <GenresList type={type} id={id} />
              {type === "movie" ? (
                <Directors type={type} id={id} />
              ) : (
                <Makers type={type} id={id} />
              )}
              <ReleaseDates type={type} id={id} />
            </div>
            <Overview type={type} id={id} />
            <Cast type={type} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
