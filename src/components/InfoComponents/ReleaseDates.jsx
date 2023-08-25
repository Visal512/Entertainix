import { useState, useEffect } from "react";
import axios from "axios";

const ReleaseDates = ({ type, id }) => {
  const [releaseDate, setReleaseDate] = useState("");
  const [firstAirDate, setFirstAirDate] = useState("");
  const [lastAirDate, setLastAirDate] = useState("");

  const fetchReleaseDates = async () => {
    if (type === "movie") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      function changeDate(date) {
        const year = date?.slice(0, 4);
        const month = date?.slice(5, 7);
        const day = date?.slice(8, 10);
        function getMonthName(monthNumber) {
          const date = new Date();
          date.setMonth(monthNumber - 1);
          return date.toLocaleString("en-US", { month: "long" });
        }
        return day + " " + getMonthName(month) + " " + year;
      }
      setReleaseDate(changeDate(data.release_date));
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      function changeDate(date) {
        const year = date?.slice(0, 4);
        const month = date?.slice(5, 7);
        const day = date?.slice(8, 10);
        function getMonthName(monthNumber) {
          const date = new Date();
          date.setMonth(monthNumber - 1);
          return date.toLocaleString("en-US", { month: "long" });
        }
        return day + " " + getMonthName(month) + " " + year;
      }
      setFirstAirDate(changeDate(data.first_air_date));

      if (data.status === "Canceled" || data.status === "Ended") {
        setLastAirDate(changeDate(data.last_air_date));
      } else {
        setLastAirDate("");
      }
    }
  };

  useEffect(() => {
    fetchReleaseDates();
  }, []);

  return (
    <>
      <div>
        {releaseDate?.length > 0 ? (
          <>
            <span style={{ fontWeight: "bold" }}>Release Date</span>
            <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
            <span>{releaseDate}</span>
          </>
        ) : (
          <></>
        )}
        {firstAirDate?.length > 0 ? (
          <>
            <span style={{ fontWeight: "bold" }}>First Episode Date</span>
            <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
            <span>{firstAirDate}</span>
          </>
        ) : (
          <></>
        )}
        {lastAirDate?.length > 0 ? (
          <>
            <div style={{ padding: "3.75px" }}></div>
            <span style={{ fontWeight: "bold" }}>Last Episode Date</span>
            <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
            <span>{lastAirDate}</span>
          </>
        ) : (
          <></>
        )}
      </div>
      <div style={{ padding: "3.75px" }}></div>
    </>
  );
};

export default ReleaseDates;
