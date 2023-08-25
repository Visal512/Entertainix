import { useState, useEffect } from "react";
import axios from "axios";

const DateOfDeath = ({ id }) => {
  const [date, setDate] = useState("");

  const fetchDateOfDeath = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    if (data?.deathday?.length > 0) {
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
      setDate(changeDate(data.deathday));
    } else {
      setDate("");
    }
  };

  useEffect(() => {
    fetchDateOfDeath();
  }, []);

  return (
    <>
      {date?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>Died</span>
          <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
          <span>{date}</span>
          <div style={{ padding: "3.75px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DateOfDeath;
