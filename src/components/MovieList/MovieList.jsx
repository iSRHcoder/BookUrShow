import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMovieList } from "../../services/movie";
import MovieCard from "../MovieCard/MovieCard";
import MyCarousel from "../MyCarousel/MyCarousel";
import MyPagination from "../MyPagination/MyPagination";
import { MovieListContext } from "../../contexts/MovieListContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const MovieList = ({ page }) => {
  const { movieList, setMovieList } = useContext(MovieListContext);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  console.log("movieList", movieList);

  useEffect(() => {
    setIsLoader(true);
    setIsError(false);
    getMovieList(page)
      .then((data) => {
        setIsLoader(false);
        setMovieList(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(() => {
        setIsLoader(false);
        setIsError(true);
      });
  }, [page, setMovieList, navigate]);

  const onPageChange = (newPage) => {
    getMovieList(newPage).then((data) => {
      setMovieList(data.results);
      setTotalPages(data.total_pages);
      navigate(`/movie-list/${newPage}`);
    });
  };

  const movie = movieList.map((item, index) => (
    <MovieCard
      key={index}
      id={item.id}
      title={item.title}
      mainPoster={item.poster_path}
      lang={item.original_language}
      popularity={item.popularity}
      releaseDate={item.release_date}
      rate={item.adult}
      page={page}
    />
  ));

  return (
    <>
      {isLoader && !isError && <Loader />}
      {!isLoader && !isError && (
        <div>
          <hr />
          <div>
            <MyCarousel />
          </div>
          <hr />
          <div>
            <img src="/images/1702467795451_webslug.avif" width="90%" />
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <MyPagination
              totalPages={totalPages}
              active={page}
              onPageChange={onPageChange}
            />
          </div>

          {isLoader && !isError && <Loader />}
          {!isLoader && !isError && (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 m-4">
              {movie}
            </div>
          )}
          <hr />
          <div>
            <img
              src="/images/stream-leadin-web-collection-202210241242.avif"
              width="90%"
            />
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

MovieList.propTypes = {
  page: PropTypes.string,
};

export default MovieList;
