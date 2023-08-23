import { useState, useEffect } from "react";
import axios from "axios";

const Poster = ({ id, type }) => {
  const [poster, setPoster] = useState("");

  const fetchPoster = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    if (data.poster_path?.length > 0) {
      setPoster("https://image.tmdb.org/t/p/original/" + data.poster_path);
    } else {
      setPoster("http://via.placeholder.com/1000x1650");
    }
  };

  useEffect(() => {
    fetchPoster();
  }, []);

  return (
    <>
      <img className="more_info_profile" src={poster} />
    </>
  );
};

export default Poster;
