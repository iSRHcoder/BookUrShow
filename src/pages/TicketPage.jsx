import { useParams } from "react-router-dom";
import MovieTicket from "../components/MovieTicket/MovieTicket";

const TicketPage = () => {
  const { mid, page } = useParams();
  return (
    <>
      <div>TicketPage</div>
      <MovieTicket mid={mid} page={page} />
    </>
  );
};

export default TicketPage;
