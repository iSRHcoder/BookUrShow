import { useParams } from "react-router-dom";
import SeatLayout from "../components/SeatLayout/SeatLayout";

const SeatsPage = () => {
  const { mid, page } = useParams();
  return (
    <>
      <SeatLayout mid={mid} page={page} />
    </>
  );
};

export default SeatsPage;
