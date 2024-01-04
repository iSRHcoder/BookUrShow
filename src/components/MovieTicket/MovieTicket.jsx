// import { useContext } from "react";
// import { SelectedSeatsContext } from "../../contexts/SelectedSeatsContext";
// import { Button, Col, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// const MovieTicket = ({ mid, page }) => {
//   const { selectedDiamondSeats, selectedGoldenSeats, selectedSilverSeats } =
//     useContext(SelectedSeatsContext);

//   const diamondSeatsTotal = selectedDiamondSeats.length * 260;
//   const goldenSeatsTotal = selectedGoldenSeats.length * 210;
//   const silverSeatsTotal = selectedSilverSeats.length * 160;

//   const diaSeat = selectedDiamondSeats.map((seat, index) => (
//     <span
//       key={index}
//       className="m-1 d-flex justify-content-center align-items-center"
//     >
//       {seat},
//     </span>
//   ));

//   const goldSeat = selectedGoldenSeats.map((seat, index) => (
//     <span
//       key={index}
//       className="m-1 d-flex justify-content-center align-items-center"
//     >
//       {seat},
//     </span>
//   ));

//   const silvSeat = selectedSilverSeats.map((seat, index) => (
//     <span
//       key={index}
//       className="m-1 d-flex justify-content-center align-items-center"
//     >
//       {seat},
//     </span>
//   ));

//   const totalTicketsPrice =
//     diamondSeatsTotal + goldenSeatsTotal + silverSeatsTotal;

//   const navigate = useNavigate();

//   const proceedClickHandler = () => {
//     navigate(`/movie-list/${page}/movie-details/${mid}/seats/ticket/payment`);
//   };

//   return (
//     <>
//       <div className="d-flex">
//         <div style={{ width: "70%" }}>
//           <div>
//             <img src="/images/bookasmile-03.avif" />
//           </div>
//           <div className="p-3">
//             <img
//               src="/images/images.jpeg"
//               style={{ width: "33%", height: "200px" }}
//             />
//             <img
//               src="/images/images (2).jpeg"
//               style={{ width: "33%", height: "200px" }}
//             />
//             <img
//               src="/images/images (1).jpeg"
//               style={{ width: "33%", height: "200px" }}
//             />
//           </div>
//           <div></div>
//         </div>
//         <div
//           className="m-auto"
//           style={{
//             width: "25%",
//             border: "2px solid #CCC",
//             borderRadius: "10%",
//             padding: "2%",
//           }}
//         >
//           <Row>
//             <Col>
//               <strong>Booked Seats :</strong>
//             </Col>
//             <Col>
//               <div className="d-flex">
//                 {diaSeat} {goldSeat} {silvSeat}
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <strong>Convenience fees :</strong>
//             </Col>
//             <Col>
//               <div className="d-flex">
//                 <span>₹.10/each ticket</span>
//               </div>
//             </Col>
//           </Row>
//           <hr />
//           <Row>
//             <Col></Col>
//             <Col>
//               <p style={{ marginBottom: "-2px" }}>
//                 <strong>Total : {totalTicketsPrice}</strong>
//               </p>
//             </Col>

//             <div className="mt-3">
//               <Button style={{ width: "100%" }} onClick={proceedClickHandler}>
//                 Proceed
//               </Button>
//             </div>
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// };

// MovieTicket.propTypes = {
//   mid: PropTypes.string,
//   page: PropTypes.string,
// };

// export default MovieTicket;

import { useContext } from "react";
import { SelectedSeatsContext } from "../../contexts/SelectedSeatsContext";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieTicket.module.css";

const MovieTicket = ({ mid, page }) => {
  const { selectedDiamondSeats, selectedGoldenSeats, selectedSilverSeats } =
    useContext(SelectedSeatsContext);

  const diamondSeatsTotal = selectedDiamondSeats.length * 260;
  const goldenSeatsTotal = selectedGoldenSeats.length * 210;
  const silverSeatsTotal = selectedSilverSeats.length * 160;

  const diaSeat = selectedDiamondSeats.map((seat, index) => (
    <span
      key={index}
      className="m-1 d-flex justify-content-center align-items-center"
    >
      {seat},
    </span>
  ));

  const goldSeat = selectedGoldenSeats.map((seat, index) => (
    <span
      key={index}
      className="m-1 d-flex justify-content-center align-items-center"
    >
      {seat},
    </span>
  ));

  const silvSeat = selectedSilverSeats.map((seat, index) => (
    <span
      key={index}
      className="m-1 d-flex justify-content-center align-items-center"
    >
      {seat},
    </span>
  ));

  const totalTicketsPrice =
    diamondSeatsTotal + goldenSeatsTotal + silverSeatsTotal;

  const navigate = useNavigate();

  const proceedClickHandler = () => {
    navigate(`/movie-list/${page}/movie-details/${mid}/seats/ticket/payment`);
  };

  return (
    <>
      <div className={`d-flex ${styles.ticketPage}`}>
        <div className={styles.ticketMain}>
          <div>
            <img src="/images/bookasmile-03.avif" width="100%" />
          </div>
          <div className={`p-3 d-flex justify-between ${styles.popcorn}`}>
            <img
              src="/images/images.jpeg"
              style={{ width: "33%", height: "110%" }}
            />
            <img
              src="/images/images (2).jpeg"
              style={{ width: "33%", height: "100%" }}
            />
            <img
              src="/images/images (1).jpeg"
              style={{ width: "33%", height: "100%" }}
            />
          </div>
        </div>
        <div
          className={`m-auto ${styles.ticket}`}
          style={{
            border: "2px solid #CCC",
            borderRadius: "10%",
            padding: "2%",
          }}
        >
          <Row>
            <Col>
              <strong>Booked Seats :</strong>
            </Col>
            <Col>
              <div className="d-flex">
                {diaSeat} {goldSeat} {silvSeat}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Convenience fees :</strong>
            </Col>
            <Col>
              <div className="d-flex">
                <span>₹.10/each ticket</span>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col></Col>
            <Col>
              <p style={{ marginBottom: "-2px" }}>
                <strong>Total : {totalTicketsPrice}</strong>
              </p>
            </Col>

            <div className="mt-3">
              <Button style={{ width: "100%" }} onClick={proceedClickHandler}>
                Proceed
              </Button>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

MovieTicket.propTypes = {
  mid: PropTypes.string,
  page: PropTypes.string,
};

export default MovieTicket;
