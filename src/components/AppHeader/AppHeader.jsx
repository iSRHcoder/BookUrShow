import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import route from "./../../routes/route.json";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const AppHeader = () => {
  const activeClasses = ({ isActive }) =>
    isActive
      ? `text-dark fs-4 fw-bold text-decoration-none ms-3 md:ms-0 md:my-1`
      : "text-decoration-none fs-5 text-dark ms-3 md:ms-0 md:my-1";

  const { isAuth, logoutHandler } = useContext(AuthContext);
  const { userData } = useContext(UserContext);

  const { lightToDarkHandler, isDark, darkToLightHandler } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill fs-5"
    : "bi bi-moon-fill fs-5";

  const darkClickHandler = isDark ? darkToLightHandler : lightToDarkHandler;

  return (
    <header>
      <Navbar
        bg="warning"
        expand="lg"
        style={{ maxHeight: "70px" }}
        className="m-auto"
      >
        <Container className="m-auto">
          <Navbar.Brand>
            <img src="/images/bookmyshow-logo-transformed.png" width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  className={activeClasses}
                  style={{ fontFamily: "cursive" }}
                  to={route.HOME}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={activeClasses}
                  style={{ fontFamily: "cursive" }}
                  to={route.MOVIE_LIST}
                >
                  Movies
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to={route.SUPPORT}
                  style={{ fontFamily: "cursive" }}
                  className={activeClasses}
                >
                  Support
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to={route.CONTACT_US}
                  style={{ fontFamily: "cursive" }}
                  className={activeClasses}
                >
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>
            <div className="d-flex flex-wrap justify-content-center text-center md:justify-end">
              {!isAuth && (
                <>
                  <NavLink to={route.LOGIN}>
                    <Button className="me-2" variant="outline-primary">
                      LogIn
                    </Button>
                  </NavLink>
                  <NavLink to={route.SIGNUP}>
                    <Button className="me-2" variant="outline-primary">
                      SignUp
                    </Button>
                  </NavLink>
                </>
              )}

              {isAuth && (
                <>
                  <NavLink>
                    <Button
                      className="me-2"
                      variant="outline-primary"
                      onClick={logoutHandler}
                    >
                      LogOut
                    </Button>
                  </NavLink>
                  <Button variant="outline-dark" className="me-2">
                    <i className="bi bi-person-fill fs-6"></i>
                    {userData.userName}
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
          <Button variant="light" onClick={darkClickHandler}>
            <i className={iconClasses}></i>
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
