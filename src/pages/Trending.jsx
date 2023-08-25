import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";

const Trending = () => {
  const [trendingData1, setTrendingData1] = useState([]);
  const [trendingData2, setTrendingData2] = useState([]);
  const [trendingData3, setTrendingData3] = useState([]);

  const fetchTrendingData1 = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    setTrendingData1(data.results);
  };

  const fetchTrendingData2 = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=2`
    );
    setTrendingData2(data.results);
  };

  const fetchTrendingData3 = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=3`
    );
    setTrendingData3(data.results);
  };

  useEffect(() => {
    fetchTrendingData1();
    fetchTrendingData2();
    fetchTrendingData3();
    document.title = "Trending – Entertainix";
  }, []);

  return (
    <>
      <h1>Trending Films & TV Shows</h1>
      <div style={{ padding: "5px" }}></div>
      <div className="card_list">
        {trendingData1?.length > 0 ? (
          <>
            {trendingData1.map((t) => (
              <a key={t?.id} href={t?.media_type + "-" + t?.id} target="_blank">
                <Card id={t?.id} type={t?.media_type} />
              </a>
            ))}
          </>
        ) : (
          <></>
        )}
        {trendingData2?.length > 0 ? (
          <>
            {trendingData2.map((t) => (
              <a key={t?.id} href={t?.media_type + "-" + t?.id} target="_blank">
                <Card id={t?.id} type={t?.media_type} />
              </a>
            ))}
          </>
        ) : (
          <></>
        )}
        {trendingData3?.length > 0 ? (
          <>
            {trendingData3.map((t) => (
              <a key={t?.id} href={t?.media_type + "-" + t?.id} target="_blank">
                <Card id={t?.id} type={t?.media_type} />
              </a>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
      <div style={{ padding: "2.5px" }}></div>
    </>
  );
};

export default Trending;
