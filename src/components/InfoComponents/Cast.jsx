import { useState, useEffect } from "react";
import axios from "axios";

const Cast = ({ type, id }) => {
  const [cast, setCast] = useState([]);
  const [name, setName] = useState("");

  const fetchCast = async () => {
    const { data } =
      await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&append_to_response=credits
    `);
    setCast(data.credits.cast);
  };

  const fetchName = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setName(data.name || data.title);
  };

  useEffect(() => {
    fetchCast();
    fetchName();
  }, []);

  return (
    <>
      <div style={{ padding: "10px" }}></div>
      {cast?.length > 0 ? (
        <>
          <h4>Cast of {name}</h4>
          <div style={{ padding: "5px" }}></div>
          <div className="cast_list">
            <>
              {cast.map((t) => (
                <a
                  key={t?.id}
                  href={"/cast/" + t?.id}
                  target="_blank"
                >
                  <div className="casts" key={t?.id}>
                    <img
                      className="prevent_select"
                      width="100%"
                      height="210px"
                      src={
                        t?.profile_path
                          ? "https://image.tmdb.org/t/p/w300/" + t?.profile_path
                          : "https://via.placeholder.com/140x210"
                      }
                    />
                    <div style={{ padding: "2.5px" }}></div>
                    <div style={{ padding: "5px" }}>
                      <span>{t?.name}</span>
                      <div style={{ padding: "3.75px" }}></div>
                      <span style={{ color: "#c3c3c3" }}>{t?.character}</span>
                    </div>
                    <div style={{ padding: "2.5px" }}></div>
                  </div>{" "}
                </a>
              ))}
            </>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cast;
