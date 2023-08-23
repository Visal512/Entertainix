import { useState, useEffect } from "react";
import axios from "axios";

import Date from "./MoreInfoComponents/components/Date";
import Rating from "./MoreInfoComponents/components/Rating";
import Certification from "./MoreInfoComponents/components/Certification";

const Card = ({ id, type }) => {
  const [name, setName] = useState([]);
  const [poster, setPoster] = useState([]);

  const fetchData = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setName(data.title);
      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/w500/" + data.poster_path);
      } else {
        setPoster("http://via.placeholder.com/240x360");
      }
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setName(data.name);
      if (data.poster_path?.length > 0) {
        setPoster("https://image.tmdb.org/t/p/w500/" + data.poster_path);
      } else {
        setPoster("http://via.placeholder.com/240x360");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card" title={"More About " + name}>
        <img
          src={poster}
          className="card-img-top"
          alt={name}
          style={{ width: "238px", height: "357px" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {name}
          </h5>
          <p className="card-text">
            <small style={{ color: "#c3c3c3" }}>
              <span>{type === "movie" ? <>Film</> : <>TV</>}</span>
              <span className="prevent_select">&nbsp;</span>
              <Date id={id} type={type} />
              <Rating type={type} id={id} />/10
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
