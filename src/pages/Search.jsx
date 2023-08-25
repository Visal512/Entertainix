import { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

import Card from "../components/Card";
import CustomPagination from "../components/CustomPagination";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      const filteredData = {
        total_pages: data.total_pages,
        results: data.results.filter((c) => c.media_type !== "person"),
      };
      setSearchData(filteredData.results);
      setNumOfPages(filteredData.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const onKeyPressHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      fetchSearchData();
    }
  };

  useEffect(() => {
    fetchSearchData();
  }, [page]);

  return (
    <>
      <div>
        <div style={{ padding: "3.75px" }}></div>
        <div style={{ display: "flex" }}>
          <input
            className="search search_field"
            placeholder="Enter here ..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={onKeyPressHandler}
          />
          <button className="search search_button" onClick={fetchSearchData}>
            <SearchIcon />
          </button>
        </div>
        <div style={{ padding: "10px" }}></div>
        <div>
          {searchData?.length > 0 ? (
            <div className="card_list">
              {searchData.map((t) => (
              <a key={t?.id} href={t?.media_type + "-" + t?.id} target="_blank">
                <Card id={t?.id} type={t?.media_type} />
              </a>
              ))}
            </div>
          ) : (
            <>
              <h1>Search for Films or TV Shows</h1>
            </>
          )}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    </>
  );
};
export default Search;
