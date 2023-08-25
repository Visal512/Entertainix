import { useState, useEffect } from "react";
import axios from "axios";

const Directors = ({ type, id }) => {
  const [directors, setDirectors] = useState([]);

  const fetchDirectors = async () => {
    if (type === "tv") {
      return false;
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setDirectors(data.crew.filter(({ job }) => job === "Director"));
    }
  };

  useEffect(() => {
    fetchDirectors();
  }, []);

  return (
    <>
      {directors?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>
            {directors?.length === 1 ? <>Director</> : <>Directors</>}
          </span>
          {directors.map((t) => (
            <span key={t?.id}>
              <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
              <span>{t?.name}</span>
            </span>
          ))}
          <div style={{ padding: "3.75px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Directors;
