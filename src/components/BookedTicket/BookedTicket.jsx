/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { SelectedSeatsContext } from "../../contexts/SelectedSeatsContext";
import { getMovieDetails } from "../../services/movie";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookedTicket = ({ mid }) => {
  const {
    selectedDiamondSeats,
    setSelectedDiamondSeats,
    selectedGoldenSeats,
    setSelectedGoldenSeats,
    selectedSilverSeats,
    setSelectedSilverSeats,
  } = useContext(SelectedSeatsContext);

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    getMovieDetails(mid).then((details) => setMovieDetails(details));
  }, [mid, setMovieDetails]);

  const diaSeat = selectedDiamondSeats.map((seat, index) => (
    <span key={index}>{seat},</span>
  ));

  const goldSeat = selectedGoldenSeats.map((seat, index) => (
    <span key={index}>{seat},</span>
  ));

  const silvSeat = selectedSilverSeats.map((seat, index) => (
    <span key={index}>{seat},</span>
  ));

  const navigate = useNavigate();

  const downloadBtnClickHandler = () => {
    window.alert(`Sorry..! Downloading is not avilable right now`);
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setTimeout(() => {
      setSelectedDiamondSeats([]);
      setSelectedGoldenSeats([]);
      setSelectedSilverSeats([]);
    }, 3000);
  };

  const getTodaysDateOrReleasedDate = (releasedDate) => {
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const today = new Date();

    if (releasedDate && new Date(releasedDate) > today) {
      const releaseDate = new Date(releasedDate);
      const year = releaseDate.getFullYear();
      const month = String(releaseDate.getMonth() + 1).padStart(2, "0");
      const day = String(releaseDate.getDate()).padStart(2, "0");
      const dayOfWeek = daysOfWeek[releaseDate.getDay()];

      return `${dayOfWeek}, ${day}-${month}-${year}`;
    } else {
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const dayOfWeek = daysOfWeek[today.getDay()];

      return `${dayOfWeek}, ${day}-${month}-${year}`;
    }
  };

  const getCurrentTimePlus2Hours = () => {
    const today = new Date();

    today.setHours(today.getHours() + 2);

    const hours = today.getHours() % 12 || 12; // Convert 0 to 12
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const ampm = today.getHours() < 12 ? "AM" : "PM";

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <Card className="m-auto" style={{ width: "22rem" }}>
      <Card.Img
        height="250px"
        variant="top"
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : "/svg's/error-svgrepo-com.svg"
        }
      />
      <Card.Body>
        <Card.Title>{movieDetails.original_title}</Card.Title>
        <hr />
        <Card.Text>
          <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
            <span>
              {getTodaysDateOrReleasedDate(movieDetails.release_date)}
            </span>
            <span>Time : {getCurrentTimePlus2Hours()}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            {diaSeat.length > 0 && <span>Diamond Seats: {diaSeat}</span>}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            {goldSeat.length > 0 && <span>Golden Seats : {goldSeat}</span>}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            {silvSeat.length > 0 && <span>Silver Seats : {silvSeat}</span>}
          </div>

          <hr />
        </Card.Text>
        <Button variant="primary" onClick={downloadBtnClickHandler}>
          Download Ticket
        </Button>
        <span className="d-block">*please click on Dowload Ticket button</span>
      </Card.Body>
    </Card>
  );
};

BookedTicket.propTypes = {
  mid: PropTypes.string,
  page: PropTypes.string,
};

export default BookedTicket;
