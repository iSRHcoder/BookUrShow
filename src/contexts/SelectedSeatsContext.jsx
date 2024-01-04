import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectedSeatsContext = createContext();

const SelectedSeatsProvider = ({ children }) => {
  const [selectedDiamondSeats, setSelectedDiamondSeats] = useState([]);
  const [selectedGoldenSeats, setSelectedGoldenSeats] = useState([]);
  const [selectedSilverSeats, setSelectedSilverSeats] = useState([]);
  return (
    <>
      <SelectedSeatsContext.Provider
        value={{
          selectedDiamondSeats,
          setSelectedDiamondSeats,
          selectedGoldenSeats,
          setSelectedGoldenSeats,
          selectedSilverSeats,
          setSelectedSilverSeats,
        }}
      >
        {children}
      </SelectedSeatsContext.Provider>
    </>
  );
};

SelectedSeatsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SelectedSeatsProvider;
