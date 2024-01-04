const TheaterScreenSVG = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 760 20"
        width="100%"
        height="30px"
        style={{ fill: "#FFFFFF", stroke: "#2980b9", strokeWidth: 2 }}
      >
        <rect width="760" height="20" rx="5" ry="5" />
        <line x1="30" y1="10" x2="730" y2="10" strokeWidth="4" />
        <line x1="50" y1="5" x2="50" y2="15" strokeWidth="2" />
        <line x1="710" y1="5" x2="710" y2="15" strokeWidth="2" />
      </svg>
    </>
  );
};

export default TheaterScreenSVG;
