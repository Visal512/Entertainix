import { useState, useEffect } from "react";
import axios from "axios";

const Certification = ({ type, id }) => {
  const [certification, setCertification] = useState("");

  const fetchCertification = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const filteredData = {
        id: data.id,
        results: data.results.map((x) => ({
          ...x,
          release_dates: x.release_dates.filter(
            (date) => date.certification !== ""
          ),
        })),
      };
      if (
        filteredData?.results?.find(({ iso_3166_1 }) => iso_3166_1 == "GB")
          ?.release_dates[0]?.certification ||
        filteredData?.results?.find(({ iso_3166_1 }) => iso_3166_1 == "US")
          ?.release_dates[0]?.certification !== undefined
      ) {
        setCertification(
          filteredData?.results?.find(({ iso_3166_1 }) => iso_3166_1 == "GB")
            ?.release_dates[0]?.certification ||
            filteredData?.results?.find(({ iso_3166_1 }) => iso_3166_1 == "US")
              ?.release_dates[0]?.certification
        );
      } else {
        return false;
      }
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const filteredData = data?.results?.filter((x) => x.rating !== 0);
      if (
        filteredData?.find(({ iso_3166_1 }) => iso_3166_1 == "GB")?.rating ||
        filteredData?.find(({ iso_3166_1 }) => iso_3166_1 == "US")?.rating !==
          undefined
      ) {
        setCertification(
          filteredData?.find(({ iso_3166_1 }) => iso_3166_1 == "GB")?.rating ||
            filteredData?.find(({ iso_3166_1 }) => iso_3166_1 == "US")?.rating
        );
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    fetchCertification();
  }, []);

  return (
    <>
      {certification?.length > 0 ? (
        <>
          <span className="certification prevent_select">
            {certification?.replace(/\s/g, "")}
          </span>
          <span className="prevent_select">&nbsp;&nbsp;&nbsp;</span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Certification;
