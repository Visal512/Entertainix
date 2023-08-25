import { useState, useEffect } from "react";
import axios from "axios";

const DateOfBirth = ({ id }) => {
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [deathStatus, setDeathStatus] = useState("");

  const fetchDateOfBirth = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
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
    setDate(changeDate(data.birthday));

    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    setAge(getAge(data.birthday));

    if (data.deathday === null) {
      setDeathStatus("no");
    } else {
      setDeathStatus("yes");
    }
  };

  useEffect(() => {
    fetchDateOfBirth();
  }, []);

  return (
    <>
      {date?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>Born</span>
          <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
          <span>
            {date}{" "}
            {deathStatus === "no" ? (
              <>
                (age {age} {age > 1 ? <>years</> : <>year</>})
              </>
            ) : (
              <></>
            )}
          </span>
          <div style={{ padding: "3.75px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DateOfBirth;
