import { useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      {selectedGenres.map((genre) => (
        <Chip
          sx={{ margin: "5px" }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          sx={{ margin: "5px" }}
          label={genre.name}
          key={genre.id}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </>
  );
};

export default Genres;
