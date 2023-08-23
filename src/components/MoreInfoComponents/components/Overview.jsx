import { useState, useEffect } from "react";
import axios from "axios";

const Overview = ({ type, id }) => {
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
    <div>
      <div style={{ padding: "2.5px" }}></div>
      {overview}
    </div>
  );
};

export default Overview;
