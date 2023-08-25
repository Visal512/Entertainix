import { useState, useEffect } from "react";
import axios from "axios";

const Makers = ({ type, id }) => {
  const [makers, setMakers] = useState([]);

  const fetchMakers = async () => {
    if (type === "movie") {
      return false;
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setMakers(data.created_by);
    }
  };

  useEffect(() => {
    fetchMakers();
  }, []);

  return (
    <>
      {makers?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>
            {makers?.length === 1 ? <>Creator</> : <>Creators</>}
          </span>
          {makers.map((t) => (
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

export default Makers;
