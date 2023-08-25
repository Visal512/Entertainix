import { useState, useEffect } from "react";
import axios from "axios";

const GenresList = ({ type, id }) => {
  const [genresList, setGenresList] = useState([]);

  const fetchGenresList = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setGenresList(data.genres);
  };

  useEffect(() => {
    fetchGenresList();
  }, []);

  return (
    <>
      {genresList?.length > 0 ? (
        <>
          <span style={{ fontWeight: "bold" }}>
            {genresList?.length === 1 ? <>Genre</> : <>Genres</>}
          </span>
          {genresList.map((t) => (
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

export default GenresList;
