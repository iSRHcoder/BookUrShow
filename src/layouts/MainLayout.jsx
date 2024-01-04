import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader/AppHeader";

const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
