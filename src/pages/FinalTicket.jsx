import { useParams } from "react-router-dom";
import BookedTicket from "../components/BookedTicket/BookedTicket";

const FinalTicket = () => {
  const { mid, page } = useParams();
  return (
    <div>
      <hr />
      <div>
        <BookedTicket mid={mid} page={page} />
      </div>
      <hr />
      <div>
        <img src="/images/bookmyshow-logo-transformed.png" width={120} />
      </div>
    </div>
  );
};

export default FinalTicket;
