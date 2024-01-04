import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MovieListContext = createContext();

const MovieListProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  return (
    <>
      <MovieListContext.Provider value={{ movieList, setMovieList }}>
        {children}
      </MovieListContext.Provider>
    </>
  );
};

MovieListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieListProvider;
