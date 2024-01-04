import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginErrorPage = () => {
  const navigate = useNavigate();
  const greetingStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    color: "#3498db",
    marginTop: "20px",
  };
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "50px",
    border: "4px solid #3498db",
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  });
  return (
    <div style={containerStyle}>
      <h3>Please Login first</h3>
      <h6>you dont have access to this feature before login</h6>
      <h6>re-directing to Login Page in 3 sec</h6>

      <h1 style={greetingStyle}>HAPPY SHOPPING</h1>
    </div>
  );
};

export default LoginErrorPage;
