import { useState, useEffect } from "react";
import axios from "axios";

const Overview = ({ id }) => {
  const [overview, setOverview] = useState("");
  const [showMore, setShowMore] = useState(false);

  const fetchOverview = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setOverview(data.biography);
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return (
    <>
      {overview.length > 0 ? (
        <>
          <div style={{ padding: "5px" }}></div>
          <span>{showMore ? overview : `${overview.substring(0, 750)}`}</span>
          {overview.length > 750 ? (
            <span onClick={() => setShowMore(!showMore)}>
              {showMore ? (
                <a className="prevent_select" style={{ color: "#ffffff" }}>
                  &nbsp;&nbsp;<span className="show_more_click">Show Less</span>
                </a>
              ) : (
                <a className="prevent_select" style={{ color: "#ffffff" }}>
                  ... <span className="show_more_click">Show More</span>
                </a>
              )}
            </span>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Overview;
