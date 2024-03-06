import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";

const MyPagination = ({ active, totalPages, onPageChange }) => {
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
    navigate(`/movie-list/${pageNumber}`);
  };

  let items = [];

  let startPage = Math.max(1, active - 4);
  let endPage = Math.min(totalPages, startPage + 9);

  if (startPage !== 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(startPage - 10)}
      />
    );
  }

  for (let number = startPage; number <= endPage; number++) {
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

  if (endPage !== totalPages) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(endPage + 1)}
      />
    );
  }

  return (
    <>
      <Pagination size="sm">{items}</Pagination>
    </>
  );
};

MyPagination.propTypes = {
  active: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default MyPagination;
