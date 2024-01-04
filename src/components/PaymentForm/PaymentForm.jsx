/* eslint-disable react-refresh/only-export-components */
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { msgHandlerHoC } from "../../hoc/msgHandlerHoC";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PaymentForm = ({ successMsg, errorMsg, msgHandler, mid, page }) => {
  const [cardNum, setCardNum] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  const payNowClickHandler = () => {
    if ((!cardNum, !cardHolderName, !expDate, !cvv)) {
      msgHandler("Please fill in all fields", "error");
    } else {
      navigate(
        `/movie-list/${page}/movie-details/${mid}/seats/ticket/payment/final-ticket`
      );
    }
  };

  return (
    <MDBContainer
      fluid
      className="py-5 gradient-custom"
      style={{ backgroundColor: "#3397DC" }}
    >
      <MDBRow className="d-flex justify-content-center py-5">
        <h5 className="text-secondary">
          Dont worry..! We dont save your Card data
        </h5>
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="9">
                  <MDBInput
                    value={cardNum}
                    onChange={(e) => setCardNum(e.target.value)}
                    label="Card Number"
                    id="form1"
                    type="number"
                    placeholder="1234 5678 9012 3457"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <MDBInput
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                    label="Expiration"
                    id="form2"
                    type="number"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    label="CVV"
                    id="form2"
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <Button variant="success" onClick={payNowClickHandler}>
                    Pay Now
                  </Button>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div>
        <span className="text-danger fs-3">{errorMsg}</span>
        <span className="text-success fs-3">{successMsg}</span>
      </div>
    </MDBContainer>
  );
};

PaymentForm.propTypes = {
  successMsg: PropTypes.string,
  errorMsg: PropTypes.string,
  msgHandler: PropTypes.string,
  mid: PropTypes.string,
  page: PropTypes.string,
};

export default msgHandlerHoC(PaymentForm);
