import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ZoomingButton = ({
  btnLable = "",
  bottom = "",
  left = "",
  variant = "",
  pointerEvents = "",
  onClick,
}) => {
  return (
    <div
      style={{
        position: "sticky",
        bottom: bottom,
        left: left,
        transform: "translateX(40%)",
        textAlign: "center",
        display: "inline-block",
        animation: "slideRight 5s ease-in-out infinite alternate",
      }}
    >
      <Button
        variant={variant}
        style={{
          animation: "zoomInOut 0.5s infinite alternate",
          borderRadius: "40%",
          pointerEvents: pointerEvents,
        }}
        onClick={onClick}
      >
        {btnLable}
      </Button>
    </div>
  );
};

ZoomingButton.propTypes = {
  btnLable: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  variant: PropTypes.string,
  pointerEvents: PropTypes.string,
  onClick: PropTypes.func,
};

export default ZoomingButton;
