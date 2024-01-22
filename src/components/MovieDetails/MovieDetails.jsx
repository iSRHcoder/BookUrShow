import { useEffect, useState } from "react";
import { getMovieCast, getMovieDetails } from "../../services/movie";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import ActorCard from "../ActorCard/ActorCard";
import ZoomingButton from "../ZoomingButton/ZoomingButton";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({ mid, page }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    setIsError(false);
    getMovieDetails(mid)
      .then((details) => {
        setMovieDetails(details);
        setIsLoader(false);
      })
      .catch(() => {
        setIsLoader(false);
        setIsError(true);
      });
  }, [mid, setMovieDetails]);

  const detailsStyle = {
    minWidth: "100%",
    minHeight: "450px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundImage: `linear-gradient(to right, rgba(10, 31, 31, 0.9) 
    calc((50vw - 170px) - 340px), rgba(10, 31, 31, 0.7) 50%, rgba(10, 31, 31, 0.6) 100%),
    url(https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path || ""})`,
  };
  const genres = movieDetails && movieDetails.genres;
  const genreNames = genres
    ? genres.map((genre) => (
        <span key={genre.id} className="me-2">
          {genre.name},
        </span>
      ))
    : [];

  const Language = movieDetails.spoken_languages
    ? movieDetails.spoken_languages.map((ele, index) => (
        <span key={index}>{ele.english_name}</span>
      ))
    : [];

  useEffect(() => {
    setIsLoader(true);
    setIsError(false);
    getMovieCast(mid)
      .then((data) => setMovieCast(data))
      .catch(() => {
        setIsLoader(false);
        setIsError(true);
      });
  }, [mid]);

  const actorDetails =
    movieCast && movieCast.cast
      ? movieCast.cast
          .filter((actor) => actor.profile_path !== null)
          .map((actor, index) => (
            <ActorCard
              key={index}
              name={actor.name}
              profile={actor.profile_path}
              character={actor.character}
            />
          ))
      : null;

  const handleWatchTrailer = () => {
    const searchQuery = movieDetails.original_title.replace(/\s+/g, "+");
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}+trailer`;
    window.open(youtubeUrl, "_blank");
  };

  const convertMinutesToHours = () => {
    if (isNaN(movieDetails.runtime) || movieDetails.runtime < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(movieDetails.runtime / 60);
    const remainingMinutes = movieDetails.runtime % 60;

    return `${hours} hr ${remainingMinutes} min`;
  };

  const isAdult = () => {
    return movieDetails.adult === false ? "U" : "A";
  };

  const convertToCrore = (amount) => {
    if (amount === isNaN) {
      return "Invalid Entry";
    }
    if (amount === 0) {
      return amount;
    }
    const croreValue = (amount / 10000000) * 83;
    return `${croreValue.toFixed(2)} cr`;
  };

  const navigate = useNavigate();

  const bookUrShowBtnHandler = () => {
    const releaseDate = new Date(movieDetails.release_date);
    const currentDate = new Date();
    const threeDaysLater = new Date();
    threeDaysLater.setDate(currentDate.getDate() + 3);

    if (
      releaseDate <= currentDate ||
      (releaseDate > currentDate && releaseDate <= threeDaysLater)
    ) {
      navigate(`/movie-list/${page}/movie-details/${mid}/seats`);
    } else {
      window.alert(
        "SORRY...! Movie is not yet released or not opened for booking, you can try booking before 3 days of release date"
      );
    }
  };

  return (
    <>
      <hr />
      <div>
        <img src="/images/1702467795451_webslug.avif" width="90%" />
      </div>
      <hr />
      {isLoader && !isError && <Loader />}
      {!isLoader && !isError && (
        <div style={detailsStyle}>
          <div className={styles.detailsStyle} style={{ minWidth: "100vw" }}>
            <div className="d-flex justify-content-center align-items-center m-2">
              <img
                style={{
                  maxWidth: "350px",
                  height: "400px",
                  borderRadius: "10%",
                  transition: "transform 0.3s",
                }}
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : "/svg's/error-svgrepo-com.svg"
                }
                alt={`${movieDetails.title} poster`}
                className="zoomable-image"
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center m-3"
              style={{ width: "70%" }}
            >
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div style={{ width: "100%" }} className={styles.titleAndImdb}>
                  <h1>{movieDetails.original_title}</h1>
                  <div className="d-flex justify-content-around align-items-center">
                    <Button className="me-3">
                      <i className="bi bi-heart"></i>
                    </Button>
                    <a
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="me-3" variant="warning" height="20px">
                        <strong>IMDb</strong>
                      </Button>
                    </a>
                    <Button variant="warning" style={{ pointerEvents: "none" }}>
                      <i className="bi bi-star-fill"></i>
                      {movieDetails.vote_average}/10
                    </Button>
                  </div>
                </div>
                <span className={styles.spanList}>
                  <ul
                    className={styles.list}
                    style={{ backgroundColor: "#ffcc00" }}
                  >
                    <li className=" me-4">
                      <span>{isAdult()}</span>
                    </li>
                    <li className="me-3">
                      <span>{genreNames}</span>
                    </li>
                    <li className="me-3">
                      <span>{movieDetails.release_date}</span>
                    </li>
                    <li className="ms-2 me-3">
                      {Language.length > 0 && <span>{Language[0]}</span>}
                    </li>
                    <li className="ms-2 me-3">{convertMinutesToHours()}</li>
                  </ul>
                </span>
                <p className={styles.tagline}>
                  <strong>{movieDetails.tagline}</strong>
                </p>

                <div className={styles.userScore}>
                  <Button
                    variant="outline-warning"
                    style={{
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  >
                    {movieDetails.popularity}%
                  </Button>
                  <p>User Score</p>
                </div>
                <div className={styles.overview}>
                  <h4>Overview</h4>
                  <span>{movieDetails.overview}</span>
                </div>
                <div style={{ width: "100%" }} className={styles.compAndButton}>
                  <div className="d-flex">
                    <div className="d-flex flex-column m-auto">
                      <strong>Production </strong>
                      <strong> Companies:</strong>
                    </div>

                    {movieDetails &&
                      movieDetails.production_companies &&
                      movieDetails.production_companies.map(
                        (productionCompany, index) => (
                          <div key={index} className="mt-3">
                            <div
                              className="d-flex flex-column justify-content-center align-items-center ms-3"
                              style={{ width: "80%" }}
                            >
                              <img
                                width={50}
                                src={
                                  productionCompany.logo_path !== null
                                    ? `https://image.tmdb.org/t/p/w500/${productionCompany.logo_path}`
                                    : `/svg's/error-svgrepo-com.svg`
                                }
                                alt={`Logo of ${productionCompany.name}`}
                              />
                              <span>{productionCompany.name}</span>
                            </div>
                          </div>
                        )
                      )}
                  </div>
                  <div className="mt-3">
                    <Button className="p-3" onClick={bookUrShowBtnHandler}>
                      <strong>BookUrShow</strong>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div>
        <div className={styles.actorsAndStatus}>
          {isLoader && !isError && <Loader />}
          {!isLoader && !isError && (
            <div style={{ maxWidth: "80vw" }}>
              <div className="d-flex" style={{ overflowX: "auto" }}>
                {actorDetails}
              </div>
            </div>
          )}
          <div className="mt-4 d-flex flex-column ms-3">
            <div>
              <p>
                <span>
                  <strong>Status :</strong>
                </span>
                <span> {movieDetails.status}</span>
              </p>
              <p>
                <span>
                  <strong>Original Language :</strong>
                </span>
                <span> {movieDetails.original_language}</span>
              </p>
              <p>
                <span>
                  <strong>Budget :</strong>
                </span>
                <span>₹ {convertToCrore(movieDetails.budget)}</span>
              </p>
              <p>
                <span>
                  <strong>Revenue :</strong>
                </span>
                <span>₹ {convertToCrore(movieDetails.revenue)}</span>
              </p>
            </div>
            <hr />
            <div>
              <Button
                className="m-auto"
                variant="danger"
                style={{
                  height: "fit-content",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleWatchTrailer}
              >
                <i className="bi bi-youtube fs-3">
                  {movieDetails.original_title}
                </i>
              </Button>
            </div>
            <p>*watch all movie related content here</p>
            <hr />
            <div className="mt-3 d-flex">
              <input
                placeholder="write movie review here"
                type="text"
                disabled
              />
              <Button variant="warning" disabled>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ZoomingButton
        btnLable="20% off"
        bottom="90%"
        left="70%"
        variant="info"
        pointerEvents="none"
      />
      <hr />
      <div>
        <img
          src="/images/stream-leadin-web-collection-202210241242.avif"
          width="80%"
        />
      </div>
      <hr />
      <hr />
    </>
  );
};

MovieDetails.propTypes = {
  mid: PropTypes.string,
  page: PropTypes.string,
};

export default MovieDetails;
