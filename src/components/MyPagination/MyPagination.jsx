import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";

const MyPagination = ({ active, totalPages, onPageChange }) => {
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    navigate(`/movie-list/${pageNumber}`);
  };

  return (
    <div className="flex items-center justify-center mt-4 flex-wrap">
      <Pagination size="sm" className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={index + 1 === Number(active)}
            className="cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300 rounded-full
                        sm:hover:bg-transparent sm:hover:border-0 sm:hover:text-blue-500
                        md:hover:bg-transparent md:hover:border-0 md:hover:text-blue-500"
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

MyPagination.propTypes = {
  active: PropTypes.string,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default MyPagination;
