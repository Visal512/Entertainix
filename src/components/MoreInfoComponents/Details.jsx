import Name from "../../components/MoreInfoComponents/components/Name";
import Poster from "../../components/MoreInfoComponents/components/Poster";
import Backdrop from "../../components/MoreInfoComponents/components/Backdrop";
import Certification from "../../components/MoreInfoComponents/components/Certification";
import Date from "../../components/MoreInfoComponents/components/Date";
import Rating from "../../components/MoreInfoComponents/components/Rating";
import Time from "../../components/MoreInfoComponents/components/Time";
import GenresList from "../../components/MoreInfoComponents/components/GenresList";
import Directors from "../../components/MoreInfoComponents/components/Directors";
import Makers from "../../components/MoreInfoComponents/components/Makers";
import ReleaseDates from "../../components/MoreInfoComponents/components/ReleaseDates";
import IMDb from "../../components/MoreInfoComponents/components/IMDb";
import YouTube from "../../components/MoreInfoComponents/components/YouTube";
import Overview from "../../components/MoreInfoComponents/components/Overview";
import Cast from "../../components/MoreInfoComponents/components/Cast";

const Details = ({ type, id }) => {
  return (
    <div className="more_info_main_div">
      <div>
        <Poster type={type} id={id} />
      </div>
      <div className="more_info_gap_1" style={{ padding: "2.5px" }}></div>
      <div className="more_info_div">
        <Backdrop type={type} id={id} />
        <div className="more_info_gap_2" style={{ padding: "2.5px" }}></div>
        <div className="more_info_info_div">
          <h1>
            <Name type={type} id={id} />
          </h1>
          <div style={{ padding: "2.5px" }}></div>
          <p className="card-text" style={{ color: "#c3c3c3" }}>
            <Certification type={type} id={id} />
            <span>{type === "movie" ? <>Film</> : <>TV</>}</span>
            <Date type={type} id={id} />
            <Rating type={type} id={id} />
            /10
            <Time type={type} id={id} />
          </p>
          <div style={{ color: "#c3c3c3" }}>
            <GenresList type={type} id={id} />
            {type === "movie" ? (
              <Directors type={type} id={id} />
            ) : (
              <Makers type={type} id={id} />
            )}
            <ReleaseDates type={type} id={id} />
          </div>
          <Overview type={type} id={id} />
          <IMDb type={type} id={id} />
          <YouTube type={type} id={id} />
          <Cast type={type} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Details;
