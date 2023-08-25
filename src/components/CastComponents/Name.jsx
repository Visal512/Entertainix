import { useState, useEffect } from "react";
import axios from "axios";

const Name = ({ id }) => {
  const [name, setName] = useState("");

  const fetchName = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    setName(data.name);
    document.title = data.name + " – Entertainix";
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
