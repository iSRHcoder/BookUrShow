import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";

const MyPagination = ({ active, totalPages, onPageChange }) => {
  const navigate = useNavigate();

  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => handlePageChange(number)}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    navigate(`/movie-list/${pageNumber}`);
  };

  return (
    <>
      <Pagination size="sm">{items}</Pagination>
    </>
  );
};

MyPagination.propTypes = {
  active: PropTypes.string,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default MyPagination;
