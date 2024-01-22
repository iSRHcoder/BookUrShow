/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  id,
  title = "",
  mainPoster = "",
  lang = "",
  popularity = "",
  releaseDate = "",
  rate = "",
  page = "",
}) => {
  const navigate = useNavigate();
  console.log("page", page);

  const cardClickHandler = () => {
    navigate(`/movie-list/${page}/movie-details/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="col-md-4 my-3 m-auto"
        style={{ width: "270px", cursor: "pointer" }}
      >
        <div className="card" onClick={cardClickHandler}>
          <img
            className="card-img-top"
            style={{ maxWidth: "270px", height: "280px" }}
            src={
              mainPoster !== null
                ? `https://image.tmdb.org/t/p/w500/${mainPoster}`
                : "/svg's/error-svgrepo-com.svg"
            }
            alt={`${title} poster`}
          />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{title}</strong>
            </h5>
            <div className="d-flex justify-content-around m-2">
              <span className="card-text me-4">
                Release Date : {releaseDate}
              </span>
              <span className="card-text">
                <strong>{rate === true ? "A" : "U"}</strong>
              </span>
            </div>
            <div className="d-flex justify-content-around m-2">
              <span className="card-text me-4">Popularity : {popularity}k</span>
              <span className="card-text">Language : {lang}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  mainPoster: PropTypes.string,
  lang: PropTypes.string,
  popularity: PropTypes.number,
  releaseDate: PropTypes.string,
  rate: PropTypes.bool,
  page: PropTypes.string,
};

export default MovieCard;
