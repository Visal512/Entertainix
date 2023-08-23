import { useState, useEffect } from "react";
import axios from "axios";

const YouTube = ({ type, id }) => {
  const [videoId, setVideoId] = useState([]);

  const fetchVideoId = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&append_to_response=videos`
    );
    const officialTrailer = data?.videos?.results?.filter(
      ({ name }) => name == "Official Trailer"
    );
    const filteredData = data?.videos?.results?.filter(
      (t) => t.type === "Trailer" && t.site === "YouTube"
    );

    if (
      data?.videos?.results?.filter(({ name }) => name == "Official Trailer")
        .length > 0
    ) {
      setVideoId(officialTrailer[0]);
    } else {
      setVideoId(filteredData[0]);
    }
  };

  useEffect(() => {
    fetchVideoId();
  }, []);

  return (
    <>
      {videoId?.key?.length > 0 ? (
        <>
          <div style={{ padding: "5px" }}></div>
          <div className="video-responsive" style={{ border: "none" }}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${videoId.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div style={{ padding: "5px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default YouTube;
