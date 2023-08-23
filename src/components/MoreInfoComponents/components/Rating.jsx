import { useState, useEffect } from "react";
import axios from "axios";

const Rating = ({ type, id }) => {
  const [rating, setRating] = useState("");

  const fetchRating = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setRating(data.vote_average.toFixed(1));
  };

  useEffect(() => {
    fetchRating();
  }, []);
  return (
    <>
      {rating > 0 ? (
        <span>
        <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
        <span
          style={{
            color: "transparent",
            textShadow: "0 0 0 #c3c3c3",
          }}
          className="prevent_select"
        >
          ⭐
        </span>
        <span className="prevent_select">&nbsp;</span>
          <span style={{ fontWeight: "bold" }}>{rating}</span>
        </span>
      ) : (
        <></>
      )}
    </>
  );
};

export default Rating;
