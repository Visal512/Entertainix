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

const TopRatedTVShows = () => {
  const [topRatedTVShowsData, setTopRatedTVShowsData] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresToUrl = changeGenresToUrl(selectedGenres);

  const fetchTopRatedTVShowsData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genresToUrl}`
    );
    setTopRatedTVShowsData(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTopRatedTVShowsData();
    document.title = "Top Rated TV Shows – entertainix";
  }, [page, genres, selectedGenres]);

  return (
    <div>
      <h1>Top Rated TV Shows</h1>
      <ThemeProvider theme={darkTheme}>
        <Genres
          type="tv"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
      </ThemeProvider>
      <div style={{ padding: "10px" }}></div>
      <div>
        {topRatedTVShowsData?.length > 0 ? (
          <div className="card_list">
            {topRatedTVShowsData.map((t) => (
              <a
                key={t?.id}
                href={`top-rated-tv-shows/tv-${t?.id}`}
                target="_blank"
              >
                <Card id={t?.id} type="tv" />
              </a>
            ))}
          </div>
        ) : (
          <h2>No TV shows found</h2>
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

export default TopRatedTVShows;
