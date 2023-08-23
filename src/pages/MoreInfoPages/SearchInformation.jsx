import { useParams } from "react-router-dom";
import Details from "../../components/MoreInfoComponents/Details";

const SearchInformation = () => {
  const { url } = useParams();

  const type = url.replace(/[^A-Za-z]/g, "");
  const id = url.replace(/[^0-9]/g, "");

  return <Details type={type} id={id} />;
};

export default SearchInformation;
