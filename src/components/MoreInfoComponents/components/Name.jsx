import { useState, useEffect } from "react";
import axios from "axios";

const Name = ({ type, id }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const fetchName = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setName(data.title);
      document.title = data.title + " – entertainix";
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setName(data.name);
      document.title = data.name + " – entertainix";
    }
  };

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

export default Name;
