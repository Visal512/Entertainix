import { useState, useEffect } from "react";
import axios from "axios";

import Name from "./CastComponents/Name";
import DateOfBirth from "./CastComponents/DateOfBirth";
import DateOfDeath from "./CastComponents/DateofDeath";
import PlaceOfBirth from "./CastComponents/PlaceOfBirth";
import Overview from "./CastComponents/Overview";
import KnownFor from "./CastComponents/KnownFor";

const CastInfo = ({ id }) => {
  const [poster, setPoster] = useState("");
  const [posterLink, setPosterLink] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    if (data.profile_path?.length > 0) {
      setPoster(
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://image.tmdb.org/t/p/original" +
          data.profile_path +
          "')"
      );
    } else {
      setPoster("https://via.placeholder.com/1850x2740");
    }

    if (data.profile_path?.length > 0) {
      setPosterLink(
        "https://image.tmdb.org/t/p/original/" + data?.profile_path
      );
    } else {
      setPosterLink("https://via.placeholder.com/1850x2740");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cast" style={{ backgroundImage: poster }}>
      <div className="cast_div">
        <img className="cast_img prevent_select" src={posterLink} />
        <div style={{ padding: "20px", overflow: "scroll", width: "100%" }}>
          <h1>
            <Name id={id} />
          </h1>
          <div className="more_extra_info">
            <DateOfBirth id={id} />
            <DateOfDeath id={id} />
            <PlaceOfBirth id={id} />
          </div>
          <Overview id={id} />
          <KnownFor id={id} />
        </div>
      </div>
    </div>
  );
};

export default CastInfo;
