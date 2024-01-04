import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const MovieDetailsPage = () => {
  const { mid, page } = useParams();
  return (
    <>
      <MovieDetails mid={mid} page={page} />
    </>
  );
};

export default MovieDetailsPage;
