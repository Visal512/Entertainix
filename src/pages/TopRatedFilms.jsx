import { useState, useEffect } from "react";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Card from "../components/Card";
import CustomPagination from "../components/CustomPagination";
import Genres from "../components/Genres";

import changeGenresToUrl from "../scripts/changeGenresToUrl";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
  },
});

const TopRatedFilms = () => {
  const [topRatedFilmsData, setTopRatedFilmsData] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresToUrl = changeGenresToUrl(selectedGenres);

  const fetchTopRatedFilmsData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genresToUrl}`
    );
    setTopRatedFilmsData(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTopRatedFilmsData();
    document.title = "Top Rated Films – entertainix";
  }, [page, genres, setGenres]);

  return (
    <div>
      <h1>Top Rated Films</h1>
      <ThemeProvider theme={darkTheme}>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      </ThemeProvider>
      <div style={{ padding: "10px" }}></div>
      <div>
        {topRatedFilmsData?.length > 0 ? (
          <div className="card_list">
            {topRatedFilmsData.map((t) => (
              <a
                key={t?.id}
                href={`top-rated-films/movie-${t?.id}`}
                target="_blank"
              >
                <Card id={t?.id} type="movie" />
              </a>
            ))}
          </div>
        ) : (
          <h2>No films found</h2>
        )}
      </div>
      {numOfPages > 1 && (
        <CustomPagination
          setPage={setPage}
          numOfPages={Math.min(numOfPages, 500)}
        />
      )}
    </div>
  );
};

export default TopRatedFilms;
