import { useState, useEffect } from "react";
import axios from "axios";

const Backdrop = ({ id, type }) => {
  const [backdrop, setBackdrop] = useState("");

  const fetchBackdrop = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    if (data.backdrop_path?.length > 0) {
      setBackdrop("https://image.tmdb.org/t/p/original/" + data.backdrop_path);
    } else {
      setBackdrop("http://via.placeholder.com/800x400");
    }
  };

  useEffect(() => {
    fetchBackdrop();
  }, []);

  return (
    <>
      <img className="more_info_backdrop" src={backdrop} />
    </>
  );
};

export default Backdrop;
