import { useState, useEffect } from "react";
import axios from "axios";

const PlaceOfBirth = ({ id }) => {
  const [place, setPlace] = useState("");

  const fetchPlaceOfBirth = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    
    setPlace(data.place_of_birth);
  };

  useEffect(() => {
    fetchPlaceOfBirth();
  }, []);

  return (
    <>
      {place?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>Place of Birth</span>
          <span className="prevent_select">&nbsp;&nbsp;‧&nbsp;&nbsp;</span>
          <span>{place}</span>
          <div style={{ padding: "3.75px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PlaceOfBirth;
