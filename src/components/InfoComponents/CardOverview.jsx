import { useState, useEffect } from "react";
import axios from "axios";

const CardOverview = ({ type, id }) => {
  const [overview, setOverview] = useState("");

  const fetchOverview = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setOverview(data.overview);
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return (
    <div className="overview_text">
      <div style={{ padding: "5px" }}></div>
      <div>{overview}</div>
    </div>
  );
};

export default CardOverview;
