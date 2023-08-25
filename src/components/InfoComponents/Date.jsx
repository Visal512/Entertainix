import { useState, useEffect } from "react";
import axios from "axios";

const Date = ({ id, type }) => {
  const [date, setDate] = useState("");
  const [firstAirDate, setFirstAirDate] = useState("");
  const [lastAirDate, setLastAirDate] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const fetchDate = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      setDate(data.release_date?.slice(0, 4));
      setReleaseDate(data.release_date);
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      if (
        (data.status === "Canceled" || data.status === "Ended") &&
        data.first_air_date?.slice(0, 4) === data.last_air_date?.slice(0, 4)
      ) {
        setDate(data.first_air_date?.slice(0, 4));
      } else if (data.status === "Canceled" || data.status === "Ended") {
        setDate(
          data.first_air_date?.slice(0, 4) +
            "–" +
            data.last_air_date?.slice(0, 4)
        );
      } else {
        setDate(data.first_air_date?.slice(0, 4) + "–");
      }
      setFirstAirDate(data.first_air_date);
      setLastAirDate(data.last_air_date);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <>
      <span>
        {releaseDate?.length > 0 ||
        (firstAirDate?.length > 0 && lastAirDate?.length > 0) ? (
          <>
            <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
            {date}
          </>
        ) : (
          <></>
        )}
      </span>
    </>
  );
};

export default Date;
