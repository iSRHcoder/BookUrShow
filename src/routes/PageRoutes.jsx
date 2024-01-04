import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import MoviesListPage from "../pages/MoviesListPage";
import SignUpPage from "../pages/SignUpPage";
import SupportPage from "../pages/SupportPage";
import ContactUsPage from "../pages/ContactUsPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import SeatsPage from "../pages/SeatsPage";
import LoginPage from "../pages/LoginPage";
import TicketPage from "../pages/TicketPage";
import PaymentPage from "../pages/PaymentPage";
import FinalTicket from "../pages/FinalTicket";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<MoviesListPage />} />
          <Route path={route.MOVIE_LIST} element={<MoviesListPage />}>
            <Route path=":page" element={<MoviesListPage />} />
          </Route>
          <Route
            path={`${route.MOVIE_LIST}/:page/${route.MOVIE_DETAILS}/:mid`}
            element={<MovieDetailsPage />}
          />
          <Route
            path={`${route.MOVIE_LIST}/:page/${route.MOVIE_DETAILS}/:mid/${route.SEATS}`}
            element={<SeatsPage />}
          />
          <Route
            path={`${route.MOVIE_LIST}/:page/${route.MOVIE_DETAILS}/:mid/${route.SEATS}/${route.TICKET}`}
            element={<TicketPage />}
          />
          <Route
            path={`${route.MOVIE_LIST}/:page/${route.MOVIE_DETAILS}/:mid/${route.SEATS}/${route.TICKET}/${route.PAYMENT}`}
            element={<PaymentPage />}
          />
          <Route
            path={`${route.MOVIE_LIST}/:page/${route.MOVIE_DETAILS}/:mid/${route.SEATS}/${route.TICKET}/${route.PAYMENT}/${route.FINAL_TICKET}`}
            element={<FinalTicket />}
          />
          <Route path={route.LOGIN} element={<LoginPage />} />
          <Route path={route.SIGNUP} element={<SignUpPage />} />
          <Route path={route.SUPPORT} element={<SupportPage />} />
          <Route path={route.CONTACT_US} element={<ContactUsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
