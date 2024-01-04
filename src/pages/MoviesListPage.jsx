import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";

const MoviesListPage = () => {
  const { page = "1" } = useParams();
  return (
    <>
      <MovieList page={page} />

      <div>
        <img src="/images/bookmyshow-logo-transformed.png" width={120} />
      </div>
    </>
  );
};

export default MoviesListPage;
