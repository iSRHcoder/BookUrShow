import PropTypes from "prop-types";

const ActorCard = ({ name = "", profile = "", character = "" }) => {
  const cardStyle = {
    width: "150px",
    height: "300px",
  };

  const handleOpenWikipedia = () => {
    const searchQuery = name.replace(/\s+/g, "_");
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${searchQuery}`;

    window.open(wikipediaUrl, "_blank");
  };

  return (
    <>
      <div className="col-md-4 my-2 m-2" style={cardStyle}>
        <div className="card">
          <img
            className="card-img-top"
            style={{ width: "150px", height: "180px" }}
            src={
              profile !== null
                ? `https://image.tmdb.org/t/p/w500/${profile}`
                : "/svg's/error-svgrepo-com.svg"
            }
            alt={`${name} profile`}
          />
          <div className="card-body">
            <p
              className="card-title"
              onClick={handleOpenWikipedia}
              style={{ cursor: "pointer" }}
            >
              <strong>{name}</strong>
            </p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "60px" }}
            >
              <span className="card-text">Character : {character}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.string,
  character: PropTypes.string,
};
export default ActorCard;
