import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import CustomPagination from "../components/CustomPagination";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrendingData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=${page}`
    );
    setTrendingData(data.results);
  };

  useEffect(() => {
    fetchTrendingData();
    document.title = "Trending – entertainix";
  }, [page]);

  return (
    <div>
      <h1>Trending Films & TV Shows</h1>
      <div style={{ padding: "7.5px" }}></div>
      <div className="card_list">
        {trendingData?.length > 0 ? (
          <>
            {trendingData.map((t) => (
              <a
                key={t?.id}
                href={`trending/${t?.media_type}-${t?.id}`}
                target="_blank"
              >
                <Card id={t?.id} type={t?.media_type} />
              </a>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
