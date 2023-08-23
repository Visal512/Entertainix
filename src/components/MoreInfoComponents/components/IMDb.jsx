import { useState, useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#dba506",
    },
  },
});

const IMDb = ({ type, id }) => {
  const [imdbID, setImdbId] = useState("");
  const [name, setName] = useState("");

  const fetchIMDbID = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/external_ids?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    setImdbId(data.imdb_id);
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
    fetchIMDbID();
    fetchName();
  }, []);
  return (
    <>
      {imdbID?.length > 0 ? (
        <>
          <div style={{ padding: "5px" }}></div>
          <ThemeProvider theme={darkTheme}>
            <Button
              variant="outlined"
              target="_blank"
              href={`https://www.imdb.com/title/${imdbID}/`}
              style={{
                borderRadius: "5px",
              }}
            >
              <img
                style={{
                  height: "23.75px",
                  marginLeft: "-10px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/320px-IMDB_Logo_2016.svg.png"
              />
              <span style={{ padding: "6.75px" }}></span>
              <span>More about {name}</span>
            </Button>
          </ThemeProvider>
          <div style={{ padding: "2.5px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default IMDb;
