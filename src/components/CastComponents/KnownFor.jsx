import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card";

const KnownFor = ({ id }) => {
  const [knownFor, setKnownFor] = useState([]);

  const fetchKnownFor = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    const uniqueArray = data?.cast?.filter(
      (obj, index) =>
        data?.cast?.findIndex((item) => item.id === obj.id) === index
    );

    setKnownFor(uniqueArray);
  };

  useEffect(() => {
    fetchKnownFor();
  }, []);

  return (
    <>
      <div style={{ padding: "10px" }}></div>
      {knownFor?.length > 0 ? (
        <>
          <h4>Movies and/or TV Shows:</h4>
          <div style={{ padding: "5px" }}></div>
          <div className="card_list">
            {knownFor?.length > 0 ? (
              <>
                {knownFor.map((t) => (
                  <a
                    key={t?.id}
                    href={"/" + t?.media_type + "-" + t?.id}
                    target="_blank"
                  >
                    <Card id={t?.id} type={t?.media_type} />
                  </a>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default KnownFor;
