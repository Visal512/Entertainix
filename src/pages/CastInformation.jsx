import { useParams } from "react-router-dom";

import CastInfo from "../components/CastInfo";

const CastInformation = () => {
  const { cast } = useParams();

  const id = cast.replace(/[^0-9]/g, "");

  return <CastInfo id={id} />;
};

export default CastInformation;
