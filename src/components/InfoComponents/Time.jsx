import { useState, useEffect } from "react";
import axios from "axios";

const Time = ({ id, type }) => {
  const [time, setTime] = useState("");

  const fetchTime = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )

    if (
      data.status === "Planned" ||
      data.status === "In Production" ||
      data.status === "Rumored" ||
      data.status === "Canceled" ||
      data.status === "Post Production"
    ) {
      setTime("");
    } else {
      if (type === "movie") {
        function timeConvert(n) {
          var num = n;
          var hours = num / 60;
          var rhours = Math.floor(hours);
          var minutes = (hours - rhours) * 60;
          var rminutes = Math.round(minutes);
          return rhours + "h " + rminutes + "m";
        }
        setTime(timeConvert(data.runtime));
      } else {
        if (data.number_of_seasons === 1) {
          setTime(data.number_of_seasons + " season");
        } else {
          setTime(data.number_of_seasons + " seasons");
        }
      }
    }
  };

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <>
      {time.length > 0 ? (
        <>
          <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
          <span>{time}</span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Time;
