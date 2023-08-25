import { useParams } from "react-router-dom";

import MoreInfo from "../components/MoreInfo";

const MoreInformation = () => {
  const { url } = useParams();

  const type = url.replace(/[^A-Za-z]/g, "");
  const id = url.replace(/[^0-9]/g, "");

  return <MoreInfo type={type} id={id} />;
};

export default MoreInformation;
