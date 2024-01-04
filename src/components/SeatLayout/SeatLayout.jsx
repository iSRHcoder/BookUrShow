import PropTypes from "prop-types";
import {
  diamondSeats,
  goldenSeats,
  silverSeats,
} from "../../constants/Constant";
import { Button, Container, Row, Col } from "react-bootstrap";
import TheaterScreenSVG from "../TheaterScreen/TheaterScreen";
import { useContext, useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movie";
import ZoomingButton from "../ZoomingButton/ZoomingButton";
import { SelectedSeatsContext } from "../../contexts/SelectedSeatsContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SeatLayout = ({ mid, page }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const { isAuth } = useContext(AuthContext);

  const {
    selectedDiamondSeats,
    setSelectedDiamondSeats,
    selectedGoldenSeats,
    setSelectedGoldenSeats,
    selectedSilverSeats,
    setSelectedSilverSeats,
  } = useContext(SelectedSeatsContext);

  useEffect(() => {
    getMovieDetails(mid).then((res) => setMovieDetails(res));
  }, [mid]);

  const diamondRows = [diamondSeats.slice(0, 15)];
  const goldenRows = [goldenSeats.slice(15, 30), goldenSeats.slice(30, 45)];
  const silverRows = [silverSeats.slice(45, 60)];

  const diamondSeatsButtons = diamondRows.map((row, diamondRowsIndex) => (
    <Row key={diamondRowsIndex} className="mb-4">
      {row.map((seat, index) => (
        <Col key={index}>
          <Button
            variant={
              selectedDiamondSeats.includes(seat.seatNo)
                ? "primary"
                : "outline-primary"
            }
            onClick={() => seatClickHandler(seat.seatNo, "diamond")}
          >
            {seat.seatNo}
          </Button>
        </Col>
      ))}
    </Row>
  ));

  const goldenSeatsButtons = goldenRows.map((row, diamondRowsIndex) => (
    <Row key={diamondRowsIndex} className="mb-4">
      {row.map((seat, index) => (
        <Col key={index}>
          <Button
            variant={
              selectedGoldenSeats.includes(seat.seatNo)
                ? "primary"
                : "outline-primary"
            }
            onClick={() => seatClickHandler(seat.seatNo, "golden")}
          >
            {seat.seatNo}
          </Button>
        </Col>
      ))}
    </Row>
  ));

  const silverSeatsButtons = silverRows.map((row, diamondRowsIndex) => (
    <Row key={diamondRowsIndex} className="mb-4">
      {row.map((seat, index) => (
        <Col key={index}>
          <Button
            variant={
              selectedSilverSeats.includes(seat.seatNo)
                ? "primary"
                : "outline-primary"
            }
            onClick={() => seatClickHandler(seat.seatNo, "silver")}
          >
            {seat.seatNo}
          </Button>
        </Col>
      ))}
    </Row>
  ));

  const seatClickHandler = (seat, category) => {
    const categoryMap = {
      diamond: setSelectedDiamondSeats,
      golden: setSelectedGoldenSeats,
      silver: setSelectedSilverSeats,
    };

    const setSelectedSeats = categoryMap[category];

    if (setSelectedSeats) {
      setSelectedSeats((prevSeats) => [...prevSeats, seat]);
    }
  };

  const navigate = useNavigate();

  const bookTicketsBtnHandler = () => {
    if (isAuth) {
      navigate(`/movie-list/${page}/movie-details/${mid}/seats/ticket`);
    } else {
      window.alert("Please Login First to book your tickets...!");
      navigate("/login");
    }
  };

  const clearSeatsBtnHandle = () => {
    setSelectedDiamondSeats([]);
    setSelectedGoldenSeats([]);
    setSelectedSilverSeats([]);
  };

  const getTodaysDate = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const dayOfWeek = daysOfWeek[today.getDay()];

    return `${dayOfWeek}, ${day}-${month}-${year}`;
  };

  return (
    <>
      <hr />
      <div className="d-flex justify-content-start align-items-center ms-5">
        <img
          style={{
            maxWidth: "60px",
            height: "80px",
            borderRadius: "10%",
          }}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : "/svg's/error-svgrepo-com.svg"
          }
          alt={`${movieDetails.title} poster`}
        />
        <div className="ms-3">
          <h3>
            {movieDetails.original_title} -
            {movieDetails.original_language === "hi"
              ? "Hindi"
              : `${movieDetails.original_language}`}
          </h3>
          <p>{getTodaysDate()}</p>
        </div>
      </div>

      <hr />
      <Container style={{ width: "60%" }}>
        <div>Diamond ₹250/-</div>
        <hr />
        <div>{diamondSeatsButtons}</div>
        <hr />
        <div>Golden ₹200/-</div>
        <hr />
        <div>{goldenSeatsButtons}</div>
        <hr />
        <div>Silver ₹150/-</div>
        <hr />
        <div>{silverSeatsButtons}</div>
        <div style={{ marginTop: "130px" }}>
          <TheaterScreenSVG />
          <p>
            <strong>All eyes this way please!</strong>
          </p>
        </div>
      </Container>
      <hr />
      <div>
        <Button
          className="me-2"
          style={{ width: "35px", height: "35px" }}
          variant="outline-primary"
        >
          1
        </Button>
        <strong className="me-3">Available</strong>
        <Button
          className="me-2"
          style={{ width: "35px", height: "35px" }}
          variant="primary"
        >
          2
        </Button>
        <strong className="me-3">Selected</strong>
        <Button
          className="me-2"
          style={{ width: "35px", height: "35px" }}
          variant="secondary"
        >
          3
        </Button>
        <strong className="me-3">Booked</strong>
      </div>
      <ZoomingButton
        btnLable="Book Tickets"
        bottom="30%"
        left="75%"
        variant="success"
        onClick={bookTicketsBtnHandler}
      />
      <ZoomingButton
        btnLable="Clear Seats"
        bottom="80%"
        left="75.5%"
        variant="danger"
        onClick={clearSeatsBtnHandle}
      />
      <hr />
      <hr />
    </>
  );
};

SeatLayout.propTypes = {
  mid: PropTypes.string,
  page: PropTypes.string,
};

export default SeatLayout;
