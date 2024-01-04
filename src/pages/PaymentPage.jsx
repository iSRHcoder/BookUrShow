import { useParams } from "react-router-dom";
import PaymentForm from "../components/PaymentForm/PaymentForm";

const PaymentPage = () => {
  const { mid, page } = useParams();
  return (
    <>
      <PaymentForm mid={mid} page={page} />
      <div>
        <img src="/images/bookmyshow-logo-transformed.png" width={120} />
      </div>
    </>
  );
};

export default PaymentPage;
